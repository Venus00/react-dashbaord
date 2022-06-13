import {makeStyles} from '@material-ui/core/styles'
const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
    root :{
        display:'flex',
    },
    container:{
        backgroundColor:theme.palette.background.paper , 
        padding : theme.spacing(8,0,6)
    },
    icon:{
        marginRight: '20px'


    },
    sideBarTitle :{
       padding : theme.spacing(2)
    },
    drawer:{
        width : drawerWidth,

    },
    drawerPaper:
    {
        width:drawerWidth
    },
    drawerHeader: {
        display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    },
    appBar : {
     
    },
    button:{
        marginTop:'40px'

    },
    cardGrid:{
        padding : '20px 0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1,
    },


}))

export default useStyles;