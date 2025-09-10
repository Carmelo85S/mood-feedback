const ExpressionsList = ({ expressions }) => (
  <div style={{ marginTop: "10px" }}>
    {expressions && Object.keys(expressions).length > 0 &&
      Object.entries(expressions).map(([exp, value]) => (
        <p key={exp} style={{ margin: "2px 0" }}>
          {exp.charAt(0).toUpperCase() + exp.slice(1)}: {(value * 100).toFixed(1)}%
        </p>
      ))}
  </div>
);

export default ExpressionsList;
