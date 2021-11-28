import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

interface Props {
  darkMode: boolean;
  onChange: () => void;
}

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};

export default function Header({ onChange, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems:"center"}}>

        <Box>
          <Typography sx={navStyles} component={Link} to="/" variant="h6">
            Re-Store
          </Typography>
          <Switch onChange={onChange} checked={darkMode} />
        </Box>

          <List sx={{ display: "flex" }}>
            {midLinks.map(({ title, path }) => (
              <ListItem key={path} component={NavLink} to={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>

        <Box sx={{display: "flex"}}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart></ShoppingCart>
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem key={path} component={NavLink} to={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
