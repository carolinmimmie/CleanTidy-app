import Button from "@mui/material/Button";
const Section3 = () => {
  return (
    <div className="section3">
      <h3 className="rubrik">Vill du jobba med oss?</h3>
      <p className="text">
        Vi på StädaFint söker nya medarbetare till vårat glada team. Tveka inte
        att höra av dig. Det kanske är just dig vi söker?"
      </p>
      <Button
        variant="contained"
        sx={{
          bgcolor: " #a09d99;",
          ":hover": { bgcolor: " #a09d99;" },
        }}
      >
        Ansök
      </Button>
    </div>
  );
};

export default Section3;
