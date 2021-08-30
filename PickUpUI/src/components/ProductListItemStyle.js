import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { FlexFlowContext } from 'twilio/lib/rest/flexApi/v1/flexFlow';
import { emphasize } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  
  //for entire box that holds product info
  entireProduct:{
    height: '15.5em',
    width: '45em',
    backgroundColor: '#e9ebf0',
    marginBottom: '1em',

    display: 'flex',
    // justifyContent: 'row',
    justifyContent: 'center',
    margin: '1em',

    '& img': {
      width: '35%',
      height: '100%',
    },

  },
  productIntro: {
    width: '65%',
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
  },

  //for just the price and calories
  priceAndCalories: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',

  },

  calories : {
    paddingLeft: '0.5em',
    borderLeft: 'black solid 2px',
  },

  //for popup
  entireDialog: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'scroll',
    height: '27em',

    '& img' : {
      height: '100%',
      width: '30%',
      padding: '1.5em',

    }
  },

  dialogDetail: {
    width: '70%',
    padding: '1.5em',

  },
  finishingOrder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // position: 'fixed',

    '& p' :{
      // marginBottom: '3em',
      fontSize: '35px',
    }


  },
  cartButton:{
    backgroundColor: 'black',
    color: 'white',
    width: '30%',
    height: '30%',
    alignItems: 'baseline',
    marginTop: '1em',

    '& span': {
      color: 'white !important',
      '& :hover': {
        color: 'black',
      },
    },



  },
  numberOfItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  RemoveCircleIcon: {
    backgroundColor: 'black',
    color: 'white',
  },
            
  AddCircleIcon: {
    backgroundColor: 'white',
    color: 'black',

  },

}));

export default useStyles;