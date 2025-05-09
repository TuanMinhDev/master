import {
  Button,
  SelectBox,
  CheckBox,
  TextBox,
  TextArea,
} from "devextreme-react";
import anh1 from "./../../anh/anh1.png";
import anh2 from "./../../anh/anh2.png";
import CollapseHeader from "@/packages/ui/header/collapse_header/CollapseHeader";
import { Controller, useForm } from "react-hook-form";
import { TextBoxField } from "@/packages/ui/hook-form-field/TextBoxField";
import { TextAreaField } from "@/packages/ui/hook-form-field/TextAreaField";
import { CustomHeaderTitle } from "@/packages/ui/HeaderTitle/CustomHeaderTitle";
import { Link } from "react-router-dom";

const ThongTinKhachHang = () => {
  const { control, setValue } = useForm<any>({
    defaultValues: {
      InsNo: "",
    },
  });
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <SelectBox
              placeholder="Biển số"
              height={26}
              width={100}
              style={{ width: "90px" }}
            />
            <TextBox
              placeholder="Nhập"
              height={26}
              width={220}
              className="rounded-sm"
            />
            <Button
              icon="search"
              height={24}
              width={32}
              style={{
                backgroundColor: "#00703c",
                color: "#fff",
                borderRadius: "4px",
              }}
              onClick={() => alert("Tìm kiếm")}
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap" style={{ width: "105px" }}>
              Số RO *
            </span>
            <TextBox value="BG-VS0551-241003-002" height={26} width={260} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap" style={{ width: "105px" }}>
              CVDV
            </span>
            <TextBox
              value="Nguyễn Thị Phương Linh"
              readOnly
              height={26}
              width={300}
            />
          </div>

          {/* Dòng 2 */}
          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap" style={{ width: "100px" }}>
              Số YC PDI
            </span>
            <TextBox value="YC0000000" readOnly height={26} width={180} />
            <CheckBox text="Báo giá PDI" value={true} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap" style={{ width: "105px" }}>
                  Phân cấp kiểm tra
                </span>
                <SelectBox
                  placeholder="1"
                  height={26}
                  //   width={20}
                  style={{ width: "70px" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#00703c",
                    border: "1px solid #00703c",
                    height: "28px",
                    width: "100px",
                    borderRadius: "2px",
                  }}
                >
                  Gói dịch vụ
                </button>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#00703c",
                    border: "1px solid #00703c",
                    height: "28px",
                    width: "120px",
                    borderRadius: "2px",
                  }}
                >
                  Tạo cuộc hẹn
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <img
                src={anh1}
                alt="anh1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <img
                src={anh2}
                alt="anh2"
                style={{ width: "50px", height: "50px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <form id="FormQL" className="flex flex-col">
        <div className="flex items-center lg-[#E8F0F6] ">
          <div className="grid grid-cols-12 gap-4 w-full  bg-gray-100 p-1">
            <div className="col-span-12  lg:col-span-4 flex">
              <div className="font-bold">Thông tin khách hàng</div>
              <button
                className="bg-green-700 text-white  rounded text-sm"
                style={{ color: "white", marginLeft: "20px" }}
              >
                ⚙️
              </button>
            </div>
            <div className="col-span-12  lg:col-span-4 ">
              <div className="font-bold">Thông tin xe</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-1 w-full p-1">
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Tên KH *</span>
            <TextBox height={26} width={200} />
            <Button
              icon="search"
              height={24}
              width={32}
              style={{
                backgroundColor: "#00703c",
                color: "#fff",
                borderRadius: "4px",
              }}
            />
          </div>

          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Biển số xe</span>
            <TextBox height={26} width={200} />
            <Button
              icon="search"
              height={24}
              width={32}
              style={{
                backgroundColor: "#00703c",
                color: "#fff",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Số khung</span>
            <TextBox height={26} width={200} />
            <Button
              icon="search"
              height={24}
              width={32}
              style={{
                backgroundColor: "#00703c",
                color: "#fff",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Họ và tên</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Hiệu xe</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Model</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Địa chỉ</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Số máy</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Màu xe</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Di động</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Km</span>
            <TextBox height={26} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Mã hội viên</span>
            <TextBox height={26} width={120} disabled />
            <Link to="">Truy vấn</Link>
            <Link to="">Chi tiết</Link>
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-center gap-2">
            <span className="whitespace-nowrap w-[105px]">Yêu cầu KH</span>
            <TextArea height={56} width={245} disabled />
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center gap-2">
            <span className="w-[105px] break-words">
              Tình trạng khi nhận xe
            </span>

            <TextArea height={56} width={245} disabled />
            <div className="flex flex-col gap-2">
                <Link to="">Ảnh đính kèm</Link>
                <Link to="">Hồ sơ bảo hiểm</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ThongTinKhachHang;
