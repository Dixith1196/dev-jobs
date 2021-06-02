import React, { useEffect, useState} from 'react'

import { connect } from 'react-redux'

import { getJobDescription }  from '../../library/store/actions/jobActions';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import "./JobInfo.css"
import { Container } from 'react-bootstrap';
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../../Components/Footer/Footer"
import { red } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

import { useParams } from "react-router";


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


function JobInfo(props) {
    // const classes = useStyles();
    const classes = useStyles();

    // const theme = useTheme();
    // const [expanded, setExpanded] = React.useState(false);

    const [mounted, setMounted] = useState(false)

    let { id } = useParams();

    const window = (new JSDOM('')).window
    const DOMPurify = createDOMPurify(window)

    if(!mounted){
      // Code for componentWillMount here
      // This code is called only one time before intial render
      props.getJobDescription(id)
    }   
  

    useEffect(() =>{
      setMounted(true)
    },[])
  

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    const jd = props.jobDescription

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
           {jd.company}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" >
           {jd.company_url}
          </Typography>
        </CardContent>
      </div>
      <div className="site-button" >
      <Button href={jd.company_url}  className="search-button" variant="contained" color="none" style={{fontWeight: "bolder", margin:"30px"}}>
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
            <Button href={jd.company_url}  className="search-button" variant="contained" color="primary" style={{fontWeight: "bolder", margin:"30px"}}>
            Company site
        </Button>
        }
        title={jd.title}
        subheader={jd.location}
      />
      <CardContent >
        <Typography  variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jd.description) }}>
     {/* {jd.description} */}
        </Typography>
      </CardContent>
    </Card>
    </div>
{/* ===================================== */}
<div style={{marginBottom:"20px", backgroundColor:"#8b26c5"}}>
<Card className={classes.root} style={{backgroundColor: "#8b26c5"}}>
      <CardHeader
        title="How to Apply"
      />
      <CardContent>
        <Typography variant="body2" color="white" component="p" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(jd.how_to_apply) }}>
        </Typography>
      </CardContent>
    </Card>
    </div>
    <Footer/>
    </Container>
    
    )
}

const mapStateToProps = state => ({
   jobDescription: state.jobs.item
})

export default connect(mapStateToProps, { getJobDescription
})(JobInfo);


