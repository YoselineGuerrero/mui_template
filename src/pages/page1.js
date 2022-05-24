import React from 'react';
import Grid from '@mui/material/Grid';
import CardInfo from '../templates/card_info';

const POSTS = [
  {
    title: "Cardify",
    description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    link:'/example_blog',
    read:'10 minutes'
  }, {
    title: "Bitwolf",
    description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.", 
    link:'/example_blog',
    read:'20 minutes'
  }, {
    title: "Biodex",
    description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", 
    link:'/example_blog',
    read:'18 minutes'
  }, {
    title: "Asoka",
    description: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    link:'/example_blog',
    read:'12 minutes'
  }, {
    title: "Viva",
    description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    link:'/example_blog',
    read:'3 minutes'
  }, {
    title: "Ventosanzap",
    description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    link:'/example_blog',
    read:'8 minutes'
  }, {
    title: "Y-Solowarm",
    description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    link:'/example_blog',
    read:'27 minutes'
  }, {
    title: "Bitchip",
    description: "Dulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    link:'/example_blog',
    read:'19 minutes'
  }, {
    title: "Subin",
    description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    link:'/example_blog',
    read:'8 minutes'
  }, {
    title: "Alphazap",
    description: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    link:'/example_blog',
    read:'3 minutes'
  }, {
    title: "Ventosanzap",
    description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    link:'/example_blog',
    read:'12 minutes'
  }, {
    title: "Keylex",
    description: "Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    link:'/example_blog',
    read:'15 minutes'
  }
];

export default function Page1() {
  return (
    <div align="center">
      <Grid container sx={{ marginTop:'5px'}} justifyContent="center">
        {POSTS.map((post) => (
          <CardInfo post={post}> </CardInfo>
        ))}
      </Grid>
    </div>
  );
}
