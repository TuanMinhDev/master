import { useI18n } from "@/i18n/useI18n";
import { Form, TextBox, NumberBox, CheckBox } from "devextreme-react";
import { GroupItem, SimpleItem } from "devextreme-react/form";
import { useRef } from "react";

const ThongTinThanhToan = ({ onValueChanged }: { onValueChanged?: (field: string, value: any) => void }) => {
  const { t } = useI18n("QuyetToan");
  const formRef = useRef<Form>(null);

  return (
    <div className="bg-white p-3 mb-3 shadow-sm">
      <div className="flex gap-1">
        <div className="border p-2 " style={{width:"40%"}}>
          <h3 className="font-bold mb-3">TG giao xe thực tế</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <label className="block mb-1">Ngày</label>
              <TextBox className="w-full" />
            </div>
            <div>
              <label className="block mb-1">Thời gian</label>
              <TextBox className="w-full" />
            </div>
            <div>
              <label className="block mb-1">Giờ</label>
              <TextBox className="w-full" />
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
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold">Tổng tiền trước thuế</span>
                <span>0</span>
              </div>
              
              <div className="flex items-center mb-3">
                <span className="font-bold mr-2">Giảm trừ khác</span>
                <div className="flex-grow">
                  <NumberBox 
                    value={0} 
                    format="#,##0" 
                    className="w-full text-right"
                    onValueChanged={(e) => onValueChanged?.('otherDiscount', e.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="font-bold mr-2">Tiền sử dụng từ thẻ</span>
                <div className="flex-grow">
                  <NumberBox 
                    format="#,##0" 
                    className="w-full text-right"
                    onValueChanged={(e) => onValueChanged?.('cardPayment', e.value)}
                  />
                </div>
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






