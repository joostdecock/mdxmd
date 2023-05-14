export const CustomComponent = ({ children }) => (
  <div style={{
    border: "2px solid green",
    padding: "1rem"
  }}>
    <p style={{ color: "green", fontWeight: "bold"}}>This content brought to you by a custom component (only works in MDX)</p>
    {children}
  </div>
)
