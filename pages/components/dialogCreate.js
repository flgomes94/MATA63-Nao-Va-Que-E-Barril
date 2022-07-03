import { React } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {

  
  const handleChangeValuesDisciplina = (value) => {
    props.setValuesDisciplina((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleChangeValuesProfessor = (value) => {
    props.setValuesProfessor((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleRegisterDisciplina = () => {
    console.log(props.valuesDisciplina);
  }

  const handleRegisterProfessor = () => {
    console.log(props.valuesProfessor);
  }

  /*
  const handleChangeEditValues = (value) => {
    props.setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  const handleRegisterClient = () => {
    console.log(props.values.name);
    Axios.post("http://localhost:3333/clients", {
      name: props.values.name,
      email: props.values.email,
      contact: props.values.contact
    }).then(response => {
      console.log(response);
      handleClose();
    })
    
    const handleEditClient = () => {
      console.log(props.id)
      console.log(props.editValues)
      Axios.put(`http://localhost:3333/clients/${props.editValues.id}`, {
        name: props.editValues.name,
        email: props.editValues.email,
        contact: props.editValues.contact,
      }).then((response) => {
        console.log(response)
        })
      handleClose();
    };
  } */

  function handleClose() {
    props.setOpen(false);
  }; 


  return (
    <div>
      {props.disciplina ? (
        <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Disciplina</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            onChange={handleChangeValuesDisciplina}
          />
          <TextField
            autoFocus
            margin="dense"
            id="codigo"
            label="Código"
            type="text"
            fullWidth
            onChange={handleChangeValuesDisciplina}
          /> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleRegisterDisciplina} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      ) : (
        <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Professor</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            onChange={handleChangeValuesProfessor}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleRegisterProfessor} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      )}
    </div>
  );
}