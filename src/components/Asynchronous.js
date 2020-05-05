import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import FirebaseService from '../services/FirebaseService';
const firebaseService = new FirebaseService();

export default function Asynchronous( { label } ) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {

      if (active) {

        
        var dataPromise = firebaseService.getEmpresas();
        dataPromise.then(querySnapshot => {
    
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log('loop 1', doc.id, " => ", doc.data());
    
            
            firebaseService.getEmpresasDocs(doc.id);
        
          });      
    
          
        });


        
        // teste acesso (isso tem que falhar)
        firebaseService.getEmpresasDocs('datamob');

        var dataPromise = firebaseService.getEmpresas();
        dataPromise.then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());

          setOptions( data );
        });
  
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-autocomplete"
      style={{ width: "100%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
