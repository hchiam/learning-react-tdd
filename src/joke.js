import React from "react";

const styles = {
  fontStyle: "italic",
  textAlign: "center",
  padding: "15px",
  marginBottom: "10px",
  backgroundColor: "#eee",
  borderBottom: "8px solid #ddd"
};

export default ({ text }) => (
  <div style={styles} data-testid="joke-text">
    {text}
  </div>
);
