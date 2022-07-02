import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"

type Props = {
  children: React.ReactNode
};

export const MenuLateral  = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        variant='permanent'
      >
        <Box
          width={theme.spacing(28)}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://avatars.githubusercontent.com/u/13056902?v=4"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  {/* home é nome do icone */}
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial"/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
  
      <Box
        height="100vh"
        // 28 un de medida própria material, 28x4 px
        marginLeft={theme.spacing(28)}
      >
        {children}
      </Box>
    </>
  )
}