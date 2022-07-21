import React, { ReactNode } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import colors from "../../styles/colors";

const Scrollbar: React.FC<{
  children?: ReactNode;
}> = ({ children }) => {
  return (
    <Scrollbars
      universal
      renderThumbVertical={(props) => (
        <div
          {...props}
          style={{
            position: "relative",
            display: "block",
            cursor: "pointer",
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
