import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Actions from './Actions';
import moment from "moment";

export default function PostCard(props) {

    const {user, _id, title, content, image, date} = props.post;
  
  return (
    <Card sx={{ width:"100%", boxShadow: "0 0 15px rgb(0, 0, 0, 0.2)", borderRadius: "4px" }} id={_id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.name.slice(0, 1)}
          </Avatar>
        }
        action={
          <Actions id={_id}/>
        }
        title={title}
        subheader={moment(date).fromNow()}
      />
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={user}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}