import { Text , View} from 'react-native';
import React, { useState } from 'react';

export const TestFlexAlignSelf = (props) => {
  return (
		<View style={[ {display:'flex', flexDirection:'row', backgroundColor:'green', width:'100%'}]}>
		<View style={[{position:'absolute', right:0,  backgroundColor:'red', flexDirection:'row'}]}>
			<Text >vent</Text><Text > 25 </Text><Text >km/h</Text>
		</View>
		</View>
  );
}

export default TestFlexAlignSelf;