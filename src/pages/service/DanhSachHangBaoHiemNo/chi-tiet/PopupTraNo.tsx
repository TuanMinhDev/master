import { useI18n } from "@/i18n/useI18n";
import { useClientgateApi } from "@/packages/api";
import { useAuth } from "@/packages/contexts/auth";
import { useConfiguration } from "@/packages/hooks";
import { showErrorAtom } from "@/packages/store";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { DateField, TextAreaField, TextBoxField } from "@/packages/components/fields";
import { Button, Popup } from "devextreme-react";

interface PopupTraNoProps {
  visible: boolean;
  onHiding: () => void;
  onSaved: (data: any) => void;
  insuranceData: any;
}

export const PopupTraNo = ({
  visible,
  onHiding,
  onSaved,
  insuranceData,
}: PopupTraNoProps) => {
  const { t } = useI18n("DanhSachHangBaoHiemNo");
  const api = useClientgateApi();
  const { auth } = useAuth();
  const showError = useSetAtom(showErrorAtom);
  const config = useConfiguration();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      PayDate: new Date().toISOString().slice(0, 10),
      PayPersonName: "",
      PaymentAmount: "",
      PayPersonIDCardNo: "",
      Note: "",
    },
  });

  useEffect(() => {
    if (visible) {
      reset({
        PayDate: new Date().toISOString().slice(0, 10),
        PayPersonName: "",
        PaymentAmount: "",
        PayPersonIDCardNo: "",
        Note: "",
      });
    }
  }, [visible, reset]);

  const handleSave = async (data: any) => {
    try {
      if (!insuranceData?.InsNo) {
        showError({
          message: t("Không tìm thấy thông tin hãng bảo hiểm"),
          debugInfo: "",
          errorInfo: "",
        });
        return;
      }

      const paymentData = {
        DealerCode: auth.orgData?.DealerCode,
        InsNo: insuranceData.InsNo,
        PayDate: data.PayDate,
        PayPersonName: data.PayPersonName,
        PaymentAmount: data.PaymentAmount,
        PayPersonIDCardNo: data.PayPersonIDCardNo,
        Note: data.Note,
        FlagDataWH: "0",
      };

      const resp = await api.DanhSachHangBaoHiemNo_UpdateCreateDL(
        false, // false = create, true = update
        paymentData
      );

      if (resp.isSuccess) {
        toast.success(t("Trả nợ thành công"));
        onSaved(resp.Data);
        onHiding();
      } else {
        showError({
          message: t(resp.errorCode),
          debugInfo: resp.debugInfo,
          errorInfo: resp.errorInfo,
        });
      }
    } catch (error) {
      console.log(error);
      showError({
        message: t("Lỗi khi trả nợ"),
        debugInfo: JSON.stringify(error),
        errorInfo: JSON.stringify(error),
      });
    }
  };

  return (
    <Popup
      visible={visible}
      onHiding={onHiding}
      title={t("Trả nợ hãng bảo hiểm")}
      showCloseButton={true}
      width={700}
      height={400}
    >
      <form onSubmit={handleSubmit(handleSave)} className="p-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Controller
              name="PayDate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DateField
                  field={field}
                  label={t("Ngày trả nợ")}
                  required={true}
                  error={errors.PayDate}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="PaymentAmount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextBoxField
                  field={field}
                  label={t("Số tiền trả")}
                  required={true}
                  error={errors.PaymentAmount}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="PayPersonName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextBoxField
                  field={field}
                  label={t("Người trả nợ")}
                  required={true}
                  error={errors.PayPersonName}
                />
              )}
            />
          </div>
          <div className="col-span-1">
            <Controller
              name="PayPersonIDCardNo"
              control={control}
              render={({ field }) => (
                <TextBoxField
                  field={field}
                  label={t("Số CMND")}
                  error={errors.PayPersonIDCardNo}
                />
              )}
            />
          </div>
          <div className="col-span-2">
            <Controller
              name="Note"
              control={control}
              render={({ field }) => (
                <TextAreaField
                  field={field}
                  label={t("Ghi chú")}
                  error={errors.Note}
                />
              )}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <Button
            text={t("Hủy")}
            stylingMode="outlined"
            type="normal"
            onClick={onHiding}
          />
          <Button
            text={t("Lưu")}
            stylingMode="contained"
            type="default"
            useSubmitBehavior={true}
          />
        </div>
      </form>
    </Popup>
  );
};