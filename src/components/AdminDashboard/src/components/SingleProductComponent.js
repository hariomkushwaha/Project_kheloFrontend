import React from "react";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';


class SingleProductComponent extends React.Component {
  state = {
    added: false,
  };

  addProduct = (product) => {
    this.props.addProduct(product);
    this.setState({
      added: true,
    });
  };


  removeProduct = (product) => {
    this.props.removeProduct(product);
    this.setState({
      added: false,
    });
  };

  render() {
    const product = this.props.product;
    return (
      <React.Fragment>
      <Box sx={{ minWidth: 275, padding:"5px", margin:"15px" }}>
      
      <Card variant="outlined" sx={{padding:"15px"}}>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            License : {product.LicenseID}
          </Typography>
          <Typography variant="h6" component="div">
            Organisation : {product.Organization}
          </Typography>
          <Typography variant="body2" component="div">
            Durability : {product.Durability}
          </Typography>
          <Typography variant="body2" component="div">
            Usability : {product.Usability}
          </Typography>
          <Typography variant="body2" component="div">
            Quality : {product.Quality}
          </Typography>
          <Typography variant="body2" component="div">
            Total : {product.Total} /5
          </Typography>
        </CardContent>
        <CardActions>
          {this.state.added ? (
            <Button onClick={() => this.removeProduct(product)} size="Large" variant="contained">
              Remove
            </Button>
          ) : (
            <Button onClick={() => this.addProduct(product)} size="Large" variant="contained">
              Compare
            </Button>
          )}
        </CardActions>
      </Card>
        </Box>
      </React.Fragment>
    );
  }
}

export default SingleProductComponent;
