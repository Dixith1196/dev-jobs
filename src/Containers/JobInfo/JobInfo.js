import React, { useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { fetchJobs, fetchCurrentLocationJobs, fetchTermJobs, fetchGivenLocationJobs, fetchFullTimeJobs , fetchFilterJobs}  from '../../library/store/actions/jobActions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import "./JobInfo.css"
import { Container } from 'react-bootstrap';
import Search from '../../Components/Search/Search'
import Button from "@material-ui/core/Button"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Footer from "../../Components/Footer/Footer"
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CardActions from '@material-ui/core/CardActions';
import ExploreIcon from '@material-ui/icons/Explore';
const useStyles = makeStyles((theme) => ({
    // root: {
    //   maxWidth: 345,
    // },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


export default function JobInfo() {
    // const classes = useStyles();
    const classes = useStyles();
    // const theme = useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <Container style={{paddingLeft:"20%", paddingRight:"20%"}}>
            
        <Card className="root">
            <div className="logo-part">
                <Typography component="h5" variant="h5" className="topo1">
                    R
                </Typography>
            </div>
      <div className="details" style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <CardContent className="content">
          <Typography component="h5" variant="h5">
            So Digital lnc.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            sodigital.co
          </Typography>
        </CardContent>
      </div>
      <div className="site-button" >
      <Button  className="search-button" variant="contained" color="none" style={{fontWeight: "bolder", margin:"30px"}}>
        Company site
    </Button>
      </div>
    </Card>
{/* ============================== */}
    <div style={{marginBottom:"20px"}}>
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
            <Button  className="search-button" variant="contained" color="primary" style={{fontWeight: "bolder", margin:"30px"}}>
            Company site
        </Button>
        }
        title="Senior Software Engineer"
        subheader="Remote, Seoul, Tokyo, Mountain View, San Fransisco"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking 
      at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
       opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
       packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
      sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of 
      passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
      <br />
      By injected humour, 
      or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
       you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
       generators on the Internet tend to repeat predefined chunks as necessary, making this the first true 
       generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model 
       sentence structures, to generate Lorem Ipsum which looks
      generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
        //   className={clsx(classes.expand, {
        //     [classes.expandOpen]: expanded,
        //   })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <Button  className="search-button" variant="contained" color="primary" style={{fontWeight: "bolder", margin:"30px"}}>
            Show More
        </Button> */}
        <ExpandMoreIcon color="primary" style={{fontSize:"35px"}}/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{fontWeight:"bolder"}}>Requirments</Typography>
          <Typography paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
          some form, by injected humour
          </Typography>
          <Typography paragraph>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going 
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
          e first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
           of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
           Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
{/* ===================================== */}
<div style={{marginBottom:"20px", backgroundColor:"#8b26c5"}}>
<Card className={classes.root} style={{backgroundColor: "#8b26c5", color:"white"}}>
      <CardHeader
        title="How to Apply"
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking 
      at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
       opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing 
       packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
        will uncover many web sites still in their infancy. Various versions have evolved over the years, 
      sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of 
      passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </Typography>
      </CardContent>
      
      
    </Card>
    </div>
    <Footer/>
    </Container>
    
    )
}
