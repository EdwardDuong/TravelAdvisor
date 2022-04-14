import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardAction,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyle from "./style";
const PlaceDetails = ({ place }) => {
  const classes = useStyle();
  return (
    <Card elevataio={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default PlaceDetails;
