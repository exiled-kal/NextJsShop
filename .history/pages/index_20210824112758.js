import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <Nex>
                  <CardActionArea>
                </Nex>
                  <Nex>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                  </Nex>
                  <Nex>
                    <CardContent>
                  </Nex>
                    <Nex>
                      <Typography>{product.name}</Typography>
                    </Nex>
                  <Nex></CardContent></Nex>
                <Nex></CardActionArea></Nex>
                <Nex>
                  <CardActions>
                </Nex>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
