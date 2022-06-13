import React from 'react'
import {Typography,Divider,List,ListItem,ListItemText,ListItemIcon,AppBar,Drawer,IconButton,Button,Card,CardActions,CardMedia,Grid,Toolbar,Container, CssBaseline, CardContent} from '@material-ui/core'
import  {DragHandle, PhotoCamera,NavigateNext,NavigateBefore} from '@material-ui/icons'
import useStyles from './styles'
import {useState} from 'react' ;


const cards = [1,2,3,4,5]
const App = () => {
    const classes = useStyles();
    //handlle sideBar state
    const [open,setOpen] = useState(false);

    const menuItems = [
        {
            text:'Dashboard',
            icon:<PhotoCamera/>,
            path:'/'
        },
        {
            text:'Configuration',
            icon:<PhotoCamera/>,
            path:'/'
        },
        {
            text:'About',
            icon:<PhotoCamera/>,
            path:'/'
        },
    ]
    const handleDrawerOpen = () =>
    {
        setOpen(true)
    }
    const handleDrawerClose = () =>
    {
        setOpen(false)
    }
    return  (
       <div className={classes.root}>
        <CssBaseline />
        <AppBar  position="fixed" className={classes.appBar}>
            <Toolbar>
                <Button  onClick={handleDrawerOpen}><NavigateNext/></Button>
                <Typography variant="h6" >
                    Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}    
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
              }}
        >
            <div>
                <Typography variant="h6"  className={classes.sideBarTitle}>
                    SideBar
                </Typography>
                <button className={classes.drawer.drawerHeader} onClick={handleDrawerClose}><NavigateBefore/></button>

            </div>
            <Divider />
            <List>
                {menuItems.map((menuItem)=>
                {
                   return (
                    <ListItem key={menuItem.text} button>
                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                        <ListItemText primary={menuItem.text}></ListItemText>
                    </ListItem>
                   ) 
                })}
            </List>
        </Drawer>
        <main>
            <div className={classes.container}>
                <Container maxWidth="sm">
                        <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
                            Dashbboard
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Dashboard Main PAge
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                            Button 1 
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                            Button2
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                {cards.map((card)=>{
                    return (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                    className={classes.cardMedia} 
                                    image=""
                                    title="image title"
                                />
                                
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Header 
                                    </Typography>
                                    <Typography>
                                        MainContent
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
                </Grid>
        </Container>
        </main>
    </div>
    )
}

export default App;