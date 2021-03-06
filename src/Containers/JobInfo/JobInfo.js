import React, { useEffect, useState} from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import { connect } from 'react-redux'

import { Card, Button, Typography, CardContent, CardHeader, CircularProgress,  } from '@material-ui/core'

import { getJobDescription }  from '../../library/store/actions/jobActions';

import { red } from '@material-ui/core/colors';

import "./JobInfo.css"

import { makeStyles } from '@material-ui/core/styles';
import Footer from "../../Components/Footer/Footer"


import { useParams } from "react-router";


const useStyles = makeStyles((theme) => ({
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
    const classes = useStyles();
    const [mounted, setMounted] = useState(false)

    let { id } = useParams();
    if(!mounted){
      props.getJobDescription(id)
    }   
  

    useEffect(() =>{
      setMounted(true)
    },[])
  



    const jd = props.jobDescription

    return (
      <div>
        <NavBar />
        {props.loading && <CircularProgress style={{display: "flex", margin: "0 auto"}} />}
        <div style={{paddingLeft:"20%", paddingRight:"20%"}}>
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
          <Typography variant="subtitle1" >
           {jd.company_url}
          </Typography>
        </CardContent>
      </div>
      <div className="site-button" >
      <Button href={jd.company_url}  className="search-button" variant="contained"  style={{fontWeight: "bolder", margin:"30px"}}>
        Company site
    </Button>
      </div>
    </Card>
    <div style={{marginBottom:"20px"}}>
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
            <Button href={jd.company_url}  className="search-button" variant="contained"  style={{fontWeight: "bolder", margin:"30px"}}>
            Company site
        </Button>
        }
        title={jd.title}
        subheader={jd.location}
      />
      <CardContent >
         <Typography  variant="body2"  component="p" dangerouslySetInnerHTML={{__html: jd.description}}>
      {/* {jd.description}  */}
        </Typography> 
      </CardContent>
    </Card>
    </div>
<div style={{marginBottom:"20px", backgroundColor:"#8b26c5"}}>
<Card className={classes.root} style={{backgroundColor: "#8b26c5"}}>
      <CardHeader
        title="How to Apply"
      />
      <CardContent>
          <Typography variant="body2"  component="p" dangerouslySetInnerHTML={{__html: jd.how_to_apply}}>
        </Typography>
      </CardContent>
    </Card>
    </div>
    <Footer/>
    </div>
    </div>
    )
}

const mapStateToProps = state => ({
   jobDescription: state.jobs.item
})

export default connect(mapStateToProps, { getJobDescription
})(JobInfo);


