import { useI18n } from "@/i18n/useI18n";
import { Form, CheckBox } from "devextreme-react";
import { GroupItem, SimpleItem } from "devextreme-react/form";
import { useRef } from "react";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { NumberBoxField } from "@/packages/ui/hook-form-field/NumberBoxField";
import { useForm } from "react-hook-form";

const ThongTinThanhToan = ({ onValueChanged }: { onValueChanged?: (field: string, value: any) => void }) => {
  const { t } = useI18n("QuyetToan");
  const formRef = useRef<Form>(null);
  const { register, control, watch } = useForm();

  return (
    <div className="bg-white p-3 mb-3 shadow-sm">
      <div className="flex gap-1">
        <div className="border p-2 " style={{width:"40%"}}>
          <h3 className="font-bold mb-3">TG giao xe thực tế</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <TextBoxField 
                field={register("day")} 
                label="Ngày" 
                disabled={true}
                labelWidth="30px"
                cssClass="w-[120px]"
              />
            </div>
            <div>
              <TextBoxField 
                field={register("time")} 
                label="Thời gian" 
                disabled={true}
                labelWidth="60px"
                cssClass="w-[120px]"

              />
            </div>
            <div>
              <TextBoxField 
                field={register("hour")} 
                label="Giờ" 
                disabled={true}
                labelWidth="20px"
                cssClass="w-[70px]"
              />
            </div>
          </div>
          <CheckBox 
            text="Khách hàng thanh toán toàn bộ chi phí S/C" 
            value={false}
            onValueChanged={(e) => onValueChanged?.('payAllRepairCost', e.value)}
          />
        </div>
        
        <div className="border p-2 "style={{width:"60%"}}>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
              <div className="flex justify-between items-center">
                <span className="font-bold">Tổng tiền trước thuế</span>
                <span>0</span>
              </div>
              
              <div className="flex items-center">
                <NumberBoxField
                  field={register("otherDiscount")}
                  label="Giảm trừ khác"
                  format="#,##0"
                  labelWidth="200px"
                />
              </div>
              
              <div className="flex items-center">
                <NumberBoxField
                  field={register("cardPayment")}
                  label="Tiền sử dụng từ thẻ"
                  format="#,##0"
                  labelWidth="200px"
                />
              </div>
            </div>
            
            <div className="col-span-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold">Tổng tiền sau thuế</span>
                <span className="font-bold">50.500.000</span>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold">Miễn thưởng/Chiết tài</span>
                <span>0</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-bold">Tổng tiền cuối cùng</span>
                <span className="font-bold">10.000.000.000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ThongTinThanhToan;








