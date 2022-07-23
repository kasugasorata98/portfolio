import React, { ReactNode } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { ScrollFrame } from "../../entities/types";
import colors from "../../styles/colors";

const Scrollbar: React.FC<{
  children?: ReactNode;
  onScrollFrame?: Function;
}> = ({ children, onScrollFrame }) => {
  return (
    <Scrollbars
      universal
      onScrollFrame={(value: ScrollFrame) => {
        onScrollFrame && onScrollFrame(value);
      }}
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            position: "relative",
            display: "block",
            cursor: "pointer",
            zIndex: 10,
            borderRadius: "inherit",
            backgroundColor: colors.hoverDark,
          }}
        />
      )}
      style={{
        height: "100vh",
        backgroundColor: colors.background,
      }}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
