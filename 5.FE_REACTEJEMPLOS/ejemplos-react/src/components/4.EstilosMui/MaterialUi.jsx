import Button from "@mui/material/Button";
import Face6SharpIcon from "@mui/icons-material/Face6Sharp";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const estilos = {
  display: "inline-block",
  mx: "2px",
  transform: "scale(0.8)",
};

function Vineta() {
  return (
    <Box component="span" sx={estilos}>
      *
    </Box>
  );
}

function MaterialUi() {
  return (
    <>
      <Face6SharpIcon color="disable" fontSize="large" />
      <Button variant="contained"> Boton material</Button>
      <Box>
        <Card>
          <CardContent>
            <Typography variant="h5">
              <Vineta />
              Titulo
            </Typography>
            <Typography variant="h5">
              <Vineta />
              Titulo2
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default MaterialUi;
