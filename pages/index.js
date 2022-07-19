import React from "react";
import { useForm } from "react-hook-form";
import {
  Input,
  TextField,
  Typography,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [user, setUser] = React.useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Cadastro blog de receitas
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Digite seu nome"
          variant="outlined"
          {...register("name", { required: true })}
          className="input"
          sx={{
            width: 1,
            my: 2,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.name?.type === "required" && "Nome é obrigatório"}
        </Typography>

        <TextField
          id="outlined-basic"
          type="email"
          label="Digite seu email"
          variant="outlined"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="input"
          sx={{
            width: 1,
            my: 2,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.email?.type === "required" && "Digite um email"}
        </Typography>

        <FormControl
          fullWidth
          className="input"
          sx={{ borderRadius: 1, my: 2 }}
        >
          <InputLabel id="demo-simple-select-label">Selecionar...</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user}
            {...register("user", { required: true })}
            onChange={handleChange}
          >
            <MenuItem value="leitor">Leitor</MenuItem>
            <MenuItem value="criador">Criador de artigos</MenuItem>
          </Select>
        </FormControl>

        <Typography sx={{ color: "info.main" }}>
          {errors.user?.type === "required" && "Selecione o tipo de usuário"}
        </Typography>

        <Box className="gender">
          <Typography variant="h6">Gênero</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Masculino"
              {...register("gender")}
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Feminino"
              {...register("gender")}
            />
          </RadioGroup>
        </Box>

        <TextField
          id="outlined-basic"
          label="Digite sua idade"
          variant="outlined"
          {...register("age", { required: true, min: 1, max: 99 })}
          className="input"
          sx={{
            width: 1,
            my: 2,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.age?.type === "required" && "Idade é obrigatória"}
        </Typography>

        <TextField
          type="password"
          id="outlined-basic"
          label="Digite sua senha"
          variant="outlined"
          {...register("password", { required: true })}
          className="input"
          sx={{
            width: 1,
            my: 2,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.password?.type === "required" && "Senha é obrigatória"}
        </Typography>

        <Box className="checkbox">
          <Input type="checkbox" {...register("term", { required: true })} />
          <Typography>Concordar com os termos</Typography>
        </Box>

        <Typography sx={{ color: "info.main" }}>
          {errors.term?.type === "required" &&
            "Você deve concordar com os termos"}
        </Typography>

        <Input
          variant="contained"
          type="submit"
          value="Cadastrar"
          sx={{ width: 1, mt: 4, borderRadius: 1 }}
        />
      </form>
    </Box>
  );
};

export default Home;
