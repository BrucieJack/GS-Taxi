import { BlockButton } from "@components/button/components";
import { useState } from "react";
import { PageSizeBox, SizeBox, SizeText, SizeTextBox } from "./style";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface IPageSize {
  size: number;
  handleChange(newSize: number): void;
}

export const PageSize = (props: IPageSize) => {
  const [open, setOpen] = useState(false);
  const handleSizeChangeOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <PageSizeBox>
      <SizeTextBox onClick={handleSizeChangeOpen}>
        <SizeText>Items per page {props.size} </SizeText>
        {open ? (
          <ArrowDropUpIcon sx={{ color: "white", mt: 1 }} fontSize="small" />
        ) : (
          <ArrowDropDownIcon sx={{ color: "white", mt: 1 }} fontSize="small" />
        )}
      </SizeTextBox>
      {open && (
        <SizeBox>
          <BlockButton
            onClick={() => props.handleChange(props.size === 20 ? 10 : 20)}
          >
            {props.size === 20 ? 10 : 20}
          </BlockButton>
          <BlockButton
            onClick={() => props.handleChange(props.size === 50 ? 10 : 50)}
          >
            {props.size === 50 ? 10 : 50}
          </BlockButton>
        </SizeBox>
      )}
    </PageSizeBox>
  );
};
