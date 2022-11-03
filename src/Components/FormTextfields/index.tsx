import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import boy from '../../assets/boy.png';
import man from '../../assets/man.png';
import oldman from '../../assets/oldman.png';
import male from '../../assets/male.png';
import female from '../../assets/female.png';
import { TextField } from "@mui/material";

const ContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

function ComponentTextfields() {
  const [value, setValue] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const[errorMessage, setErrorMessage] = useState<string>("");
  const onChange = (event: { target: { value: any } }) => {
    setValue(event.target.value);
  };
  const onChangeAge = (event: { target: { value: any } }) => {
    const reg = /^[0-9\b]+$/;
    if (reg.test(event.target.value)) {
        setAge(event.target.value);
        setError(false);
        setErrorMessage("");
      } else {
        setError(true);
        setErrorMessage("Incorrect entry.(Only numbers)");
        setAge(0);
      }
  };
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  const getImageAccordingToAge = () => {
        if((age > 0) &&age < 20 )
            return <img src={boy} alt="boy"/>;

        if((age >= 20) && age <= 50 )
            return <img src={man} alt="man"/>;
      
        if(age > 50 )
        return <img src={oldman} alt="oldman"/>;
    };
  return (
    <ContentBox>
      <input
        className="form-input"
        name="Name"
        type="text"
        onChange={onChange}
        placeholder="Enter Name"
      />
      <br/> <br />
      {value ? (<>
           <TextField
           className="form-input"
           name="Age"
           error={error}
           helperText={errorMessage}
           onChange={onChangeAge}
           placeholder="Enter Age"
         />
           {getImageAccordingToAge()}
         <br /> <br />
         <Box width="10%">
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Gender</InputLabel>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={gender}
               label="Gender"
               onChange={handleChange}
             >
               <MenuItem value={"Female"}>Female</MenuItem>
               <MenuItem value={"Male"}>Male</MenuItem>
             </Select>
           </FormControl>
           <br /> <br />
            {gender === 'Female' ? <img src={female} alt="female"/> : (gender === 'Male' ? <img src={male} alt="male"/>  : <></>) }
         </Box>
         </>
      ) : <></>
   }
      
      
    </ContentBox>
  );
}

export default ComponentTextfields;
