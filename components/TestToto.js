import { Text, View } from 'react-native';
import React, { useState } from 'react';

const SubSubToto = (props) => {
	return (
	  <Text>SubSubToto {props.tata}</Text>
	);
  }

const SubToto = (props) => {
	return (
	<View>
	  <Text>SubToto {props.tata}</Text>
	  <SubSubToto {...props} />
	</View>
	);
  }

export const TestToto = () => {
	let toto = "toto"
	let tata = "tata"
	const props = {toto, tata}
  return (
	<View>
	<Text></Text><Text></Text><Text></Text>
	<Text>{props.toto}</Text>
	<SubToto {...props} />
	</View>
  );
}

export default TestToto;