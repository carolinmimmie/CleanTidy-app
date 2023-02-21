import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
// import Link from "@mui/material/Link";
// import Link from '@mui/material/Link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["Städning", "Fönsterputs", "Mina Sidor"];

const navItems = [
  { name: "Städning", href: "http://localhost:3000/landingpage" },
  { name: "Fönsterputs", href: "http://localhost:3000/landingpage" },
  { name: "Mina Sidor", href: "http://localhost:3000/mypages" },
];

const Nav = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        StädaFint
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.href} sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} style={{ backgroundColor: "black" }}>
      {/* <CssBaseline /> */}
      <AppBar
        component="nav"
        sx={{
          bgcolor: " #f5f4f2", // use summary background color
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "black", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            // href="http://localhost:3000/landingpage"
            // target={"localhost:3001/landingpage"}
            // href="#"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "black" },
              textDecorationLine: "none",
            }}
          >
            <Link
              href="landingpage"
              sx={{
                color: "black",
                textDecorationLine: "none",
              }}
            >
              StädaFint
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button href={item.href} key={item.name} sx={{ color: "black" }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
  
        </Typography>
      </Box> */}
    </Box>
  );
};
export default Nav;
