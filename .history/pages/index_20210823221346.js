import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
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
                <CardActionArea>
                  <CardMedia component="img" image={product.image}
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}