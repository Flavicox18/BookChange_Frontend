import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../../services/authentication.service";
import { Registrarse} from "../../models/usuario";
import { FormBuilder, FormGroup, Validators} from "@angular/forms";


interface Provincia {
  codigo: string;
  nombre: string;
}

interface Departamento {
  codigo: string;
  provinciaCodigo: string;
  nombre: string;
}

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit{

  pasoActual: number = 1;
  selectedProvincia: string = '';
  selectedDepartamento: string = '';
  imageSrc: string | ArrayBuffer | null = null; // Inicializa con null
  generoSeleccionado = false;
  toggleGenero() {
    this.generoSeleccionado = !this.generoSeleccionado;
  }

  registrarseModel: Registrarse = new Registrarse();

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.datosForm = this.fb.group({});
  }
  ngOnInit() {
    this.datosForm = this.fb.group({
      correo: [null,[Validators.required, Validators.email]],
      contrasena: [null,[Validators.required]],
      nombre: [null,[Validators.required]],
      dni: [null,[Validators.required]],
      provincia: [null,[Validators.required]],
      apellido: [null,[Validators.required]],
      telefono: [null,[Validators.required]],
      departamento: [null,[Validators.required]],
      imgPerfil: [null,[Validators.required]],
      descripcion: [null,[Validators.required]],
    })
    console.warn()
  }

  datosForm: FormGroup
  registrarUsuario() {
    // Recupera los datos del formulario
    const datosUsuario = this.datosForm.value;

    // Asigna los datos al modelo Registrarse
    this.registrarseModel.correo = datosUsuario.correo;
    this.registrarseModel.contrasena = datosUsuario.contrasena;
    this.registrarseModel.dni = datosUsuario.dni;
    this.registrarseModel.nombre = datosUsuario.nombre;
    this.registrarseModel.apellido = datosUsuario.apellido;
    this.registrarseModel.telefono = datosUsuario.telefono;
    this.registrarseModel.descripcion = datosUsuario.descripcion;
    this.registrarseModel.fotoPerfil = datosUsuario.imgPerfil;

    console.log("datos: ", datosUsuario)
    // Llama al servicio para guardar el usuario
    this.authenticationService.guardarUsuario(this.registrarseModel).subscribe(
      () => {
        // Maneja el éxito, por ejemplo, redirecciona a otra página
        console.log('Usuario registrado exitosamente');
      },
      (error) => {
        // Maneja el error, muestra un mensaje de error, etc.
        console.error('Error al registrar usuario', error);
      }
    );
  }

  onFileChange(event: any): void {
    const reader = new FileReader();
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      if (allowedImageTypes.includes(file.type)) {
        reader.onload = () => {
          this.imageSrc = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        // Aquí puedes manejar el caso en el que el archivo no sea una imagen válido
        alert('Por favor, selecciona un archivo de imagen válido (JPEG, PNG, GIF).');
        // También puedes restablecer el valor del input para deshacer la selección no válida
        event.target.value = null;
      }
    }
  }

  provincias: Provincia[] = [
    { codigo: '001', nombre: 'Amazonas' },
    { codigo: '002', nombre: 'Ancash' },
    { codigo: '003', nombre: 'Apurímac' },
    { codigo: '004', nombre: 'Arequipa' },
    { codigo: '005', nombre: 'Ayacucho' },
    { codigo: '006', nombre: 'Cajamarca' },
    { codigo: '007', nombre: 'Callao' },
    { codigo: '008', nombre: 'Cusco' },
    { codigo: '009', nombre: 'Huancavelica' },
    { codigo: '010', nombre: 'Huánuco' },
    { codigo: '011', nombre: 'Ica' },
    { codigo: '012', nombre: 'Junín' },
    { codigo: '013', nombre: 'La Libertad' },
    { codigo: '014', nombre: 'Lambayeque' },
    { codigo: '015', nombre: 'Lima' },
    { codigo: '016', nombre: 'Loreto' },
    { codigo: '017', nombre: 'Madre de Dios' },
    { codigo: '018', nombre: 'Moquegua' },
    { codigo: '019', nombre: 'Pasco' },
    { codigo: '020', nombre: 'Piura' },
    { codigo: '021', nombre: 'Puno' },
    { codigo: '022', nombre: 'San Martín' },
    { codigo: '023', nombre: 'Tacna' },
    { codigo: '024', nombre: 'Tumbes' },
    { codigo: '025', nombre: 'Ucayali' },
  ];

  departamentos: Departamento[] = [
    // Amazonas
    { codigo: '001', provinciaCodigo: '001', nombre: 'Chachapoyas' },
    { codigo: '002', provinciaCodigo: '001', nombre: 'Bagua' },
    { codigo: '003', provinciaCodigo: '001', nombre: 'Bongara' },
    { codigo: '004', provinciaCodigo: '001', nombre: 'Condorcanqui' },
    { codigo: '005', provinciaCodigo: '001', nombre: 'Luya' },
    { codigo: '006', provinciaCodigo: '001', nombre: 'Rodriguez de Mendoza' },
    { codigo: '007', provinciaCodigo: '001', nombre: 'Utcubamba' },
    { codigo: '008', provinciaCodigo: '001', nombre: 'Amazonas' },
    // Ancash
    { codigo: '009', provinciaCodigo: '002', nombre: 'Huaraz' },
    { codigo: '010', provinciaCodigo: '002', nombre: 'Aija' },
    { codigo: '011', provinciaCodigo: '002', nombre: 'Antonio Raymondi' },
    { codigo: '012', provinciaCodigo: '002', nombre: 'Asuncion' },
    { codigo: '013', provinciaCodigo: '002', nombre: 'Bolognesi' },
    { codigo: '014', provinciaCodigo: '002', nombre: 'Carhuaz' },
    { codigo: '015', provinciaCodigo: '002', nombre: 'Carlos Fermin Fitzcarrald' },
    { codigo: '016', provinciaCodigo: '002', nombre: 'Casma' },
    { codigo: '017', provinciaCodigo: '002', nombre: 'Corongo' },
    { codigo: '018', provinciaCodigo: '002', nombre: 'Huari' },
    { codigo: '019', provinciaCodigo: '002', nombre: 'Huarmey' },
    { codigo: '020', provinciaCodigo: '002', nombre: 'Huaylas' },
    { codigo: '021', provinciaCodigo: '002', nombre: 'Mariscal Luzuriaga' },
    { codigo: '022', provinciaCodigo: '002', nombre: 'Ocros' },
    { codigo: '023', provinciaCodigo: '002', nombre: 'Pallasca' },
    { codigo: '024', provinciaCodigo: '002', nombre: 'Pomabamba' },
    { codigo: '025', provinciaCodigo: '002', nombre: 'Recuay' },
    { codigo: '026', provinciaCodigo: '002', nombre: 'Santa' },
    { codigo: '027', provinciaCodigo: '002', nombre: 'Sihuas' },
    { codigo: '028', provinciaCodigo: '002', nombre: 'Yungay' },
    // Apurímac
    { codigo: '029', provinciaCodigo: '003', nombre: 'Abancay' },
    { codigo: '030', provinciaCodigo: '003', nombre: 'Andahuaylas' },
    { codigo: '031', provinciaCodigo: '003', nombre: 'Antabamba' },
    { codigo: '032', provinciaCodigo: '003', nombre: 'Aymaraes' },
    { codigo: '033', provinciaCodigo: '003', nombre: 'Cotabambas' },
    { codigo: '034', provinciaCodigo: '003', nombre: 'Chincheros' },
    { codigo: '035', provinciaCodigo: '003', nombre: 'Grau' },
    // Arequipa
    { codigo: '036', provinciaCodigo: '004', nombre: 'Arequipa' },
    { codigo: '037', provinciaCodigo: '004', nombre: 'Camana' },
    { codigo: '038', provinciaCodigo: '004', nombre: 'Caraveli' },
    { codigo: '039', provinciaCodigo: '004', nombre: 'Castilla' },
    { codigo: '040', provinciaCodigo: '004', nombre: 'Caylloma' },
    { codigo: '041', provinciaCodigo: '004', nombre: 'Condesuyos' },
    { codigo: '042', provinciaCodigo: '004', nombre: 'Islay' },
    { codigo: '043', provinciaCodigo: '004', nombre: 'La Union' },
    // Ayacucho
    { codigo: '044', provinciaCodigo: '005', nombre: 'Huamanga' },
    { codigo: '045', provinciaCodigo: '005', nombre: 'Cangallo' },
    { codigo: '046', provinciaCodigo: '005', nombre: 'Huanca Sancos' },
    { codigo: '047', provinciaCodigo: '005', nombre: 'Huanta' },
    { codigo: '048', provinciaCodigo: '005', nombre: 'La Mar' },
    { codigo: '049', provinciaCodigo: '005', nombre: 'Lucanas' },
    { codigo: '050', provinciaCodigo: '005', nombre: 'Parinacochas' },
    { codigo: '051', provinciaCodigo: '005', nombre: 'Paucar del Sara Sara' },
    { codigo: '052', provinciaCodigo: '005', nombre: 'Sucre' },
    { codigo: '053', provinciaCodigo: '005', nombre: 'Victor Fajardo' },
    { codigo: '054', provinciaCodigo: '005', nombre: 'Vilcas Huaman' },
    { codigo: '055', provinciaCodigo: '005', nombre: 'Cangallo' },
    // Cajamarca
    { codigo: '056', provinciaCodigo: '006', nombre: 'Cajamarca' },
    { codigo: '057', provinciaCodigo: '006', nombre: 'Cajabamba' },
    { codigo: '058', provinciaCodigo: '006', nombre: 'Celendin' },
    { codigo: '059', provinciaCodigo: '006', nombre: 'Chota' },
    { codigo: '060', provinciaCodigo: '006', nombre: 'Contumaza' },
    { codigo: '061', provinciaCodigo: '006', nombre: 'Cutervo' },
    { codigo: '062', provinciaCodigo: '006', nombre: 'Hualgayoc' },
    { codigo: '063', provinciaCodigo: '006', nombre: 'Jaen' },
    { codigo: '064', provinciaCodigo: '006', nombre: 'San Ignacio' },
    { codigo: '065', provinciaCodigo: '006', nombre: 'San Marcos' },
    { codigo: '066', provinciaCodigo: '006', nombre: 'San Miguel' },
    { codigo: '067', provinciaCodigo: '006', nombre: 'San Pablo' },
    { codigo: '068', provinciaCodigo: '006', nombre: 'Santa Cruz' },
    // Callao
    { codigo: '069', provinciaCodigo: '007', nombre: 'Callao' },
    // Cusco
    { codigo: '070', provinciaCodigo: '008', nombre: 'Cusco' },
    { codigo: '071', provinciaCodigo: '008', nombre: 'Acomayo' },
    { codigo: '072', provinciaCodigo: '008', nombre: 'Anta' },
    { codigo: '073', provinciaCodigo: '008', nombre: 'Calca' },
    { codigo: '074', provinciaCodigo: '008', nombre: 'Canas' },
    { codigo: '075', provinciaCodigo: '008', nombre: 'Canchis' },
    { codigo: '076', provinciaCodigo: '008', nombre: 'Chumbivilcas' },
    { codigo: '077', provinciaCodigo: '008', nombre: 'Espinar' },
    { codigo: '078', provinciaCodigo: '008', nombre: 'La Convencion' },
    { codigo: '079', provinciaCodigo: '008', nombre: 'Paruro' },
    { codigo: '080', provinciaCodigo: '008', nombre: 'Paucartambo' },
    { codigo: '081', provinciaCodigo: '008', nombre: 'Quispicanchi' },
    { codigo: '082', provinciaCodigo: '008', nombre: 'Urubamba' },
    // Huancavelica
    { codigo: '083', provinciaCodigo: '009', nombre: 'Huancavelica' },
    { codigo: '084', provinciaCodigo: '009', nombre: 'Acobamba' },
    { codigo: '085', provinciaCodigo: '009', nombre: 'Angaraes' },
    { codigo: '086', provinciaCodigo: '009', nombre: 'Castrovirreyna' },
    { codigo: '087', provinciaCodigo: '009', nombre: 'Churcampa' },
    { codigo: '088', provinciaCodigo: '009', nombre: 'Huaytara' },
    { codigo: '089', provinciaCodigo: '009', nombre: 'Tayacaja' },
    // Huánuco
    { codigo: '090', provinciaCodigo: '010', nombre: 'Huánuco' },
    { codigo: '091', provinciaCodigo: '010', nombre: 'Ambo' },
    { codigo: '092', provinciaCodigo: '010', nombre: 'Dos de Mayo' },
    { codigo: '093', provinciaCodigo: '010', nombre: 'Huacaybamba' },
    { codigo: '094', provinciaCodigo: '010', nombre: 'Huamalies' },
    { codigo: '095', provinciaCodigo: '010', nombre: 'Leoncio Prado' },
    { codigo: '096', provinciaCodigo: '010', nombre: 'Marañon' },
    { codigo: '097', provinciaCodigo: '010', nombre: 'Pachitea' },
    { codigo: '098', provinciaCodigo: '010', nombre: 'Puerto Inca' },
    { codigo: '099', provinciaCodigo: '010', nombre: 'Lauricocha' },
    { codigo: '100', provinciaCodigo: '010', nombre: 'Yarowilca' },
    // Ica
    { codigo: '101', provinciaCodigo: '011', nombre: 'Ica' },
    { codigo: '102', provinciaCodigo: '011', nombre: 'Chincha' },
    { codigo: '103', provinciaCodigo: '011', nombre: 'Nazca' },
    { codigo: '104', provinciaCodigo: '011', nombre: 'Palpa' },
    { codigo: '105', provinciaCodigo: '011', nombre: 'Pisco' },
    // Junín
    { codigo: '106', provinciaCodigo: '012', nombre: 'Huancayo' },
    { codigo: '107', provinciaCodigo: '012', nombre: 'Concepcion' },
    { codigo: '108', provinciaCodigo: '012', nombre: 'Chanchamayo' },
    { codigo: '109', provinciaCodigo: '012', nombre: 'Jauja' },
    { codigo: '110', provinciaCodigo: '012', nombre: 'Junin' },
    { codigo: '111', provinciaCodigo: '012', nombre: 'Satipo' },
    { codigo: '112', provinciaCodigo: '012', nombre: 'Tarma' },
    { codigo: '113', provinciaCodigo: '012', nombre: 'Yauli' },
    { codigo: '114', provinciaCodigo: '012', nombre: 'Chupaca' },
    // La Libertad
    { codigo: '115', provinciaCodigo: '013', nombre: 'Trujillo' },
    { codigo: '116', provinciaCodigo: '013', nombre: 'Ascope' },
    { codigo: '117', provinciaCodigo: '013', nombre: 'Bolivar' },
    { codigo: '118', provinciaCodigo: '013', nombre: 'Chepen' },
    { codigo: '119', provinciaCodigo: '013', nombre: 'Gran Chimu' },
    { codigo: '120', provinciaCodigo: '013', nombre: 'Julcan' },
    { codigo: '121', provinciaCodigo: '013', nombre: 'Otuzco' },
    { codigo: '122', provinciaCodigo: '013', nombre: 'Pacasmayo' },
    { codigo: '123', provinciaCodigo: '013', nombre: 'Pataz' },
    { codigo: '124', provinciaCodigo: '013', nombre: 'Sanchez Carrion' },
    { codigo: '125', provinciaCodigo: '013', nombre: 'Santiago de Chuco' },
    { codigo: '126', provinciaCodigo: '013', nombre: 'Viru' },
    // Lambayeque
    { codigo: '127', provinciaCodigo: '014', nombre: 'Chiclayo' },
    { codigo: '128', provinciaCodigo: '014', nombre: 'Ferrenafe' },
    { codigo: '129', provinciaCodigo: '014', nombre: 'Lambayeque' },
    { codigo: '130', provinciaCodigo: '014', nombre: 'Morrope' },
    { codigo: '131', provinciaCodigo: '014', nombre: 'Motupe' },
    { codigo: '132', provinciaCodigo: '014', nombre: 'Olmos' },
    { codigo: '133', provinciaCodigo: '014', nombre: 'Pacora' },
    { codigo: '134', provinciaCodigo: '014', nombre: 'Salas' },
    { codigo: '135', provinciaCodigo: '014', nombre: 'San Ignacio' },
    { codigo: '136', provinciaCodigo: '014', nombre: 'Tucume' },
    // Lima
    { codigo: '137', provinciaCodigo: '015', nombre: 'Lima' },
    { codigo: '138', provinciaCodigo: '015', nombre: 'Barranca' },
    { codigo: '139', provinciaCodigo: '015', nombre: 'Cajatambo' },
    { codigo: '140', provinciaCodigo: '015', nombre: 'Callao' },
    { codigo: '141', provinciaCodigo: '015', nombre: 'Canta' },
    { codigo: '142', provinciaCodigo: '015', nombre: 'Cañete' },
    { codigo: '143', provinciaCodigo: '015', nombre: 'Huaral' },
    { codigo: '144', provinciaCodigo: '015', nombre: 'Huarochiri' },
    { codigo: '145', provinciaCodigo: '015', nombre: 'Huaura' },
    { codigo: '146', provinciaCodigo: '015', nombre: 'Oyon' },
    { codigo: '147', provinciaCodigo: '015', nombre: 'Yauyos' },
    // Loreto
    { codigo: '148', provinciaCodigo: '016', nombre: 'Iquitos' },
    { codigo: '149', provinciaCodigo: '016', nombre: 'Alto Amazonas' },
    { codigo: '150', provinciaCodigo: '016', nombre: 'Datem del Marañon' },
    { codigo: '151', provinciaCodigo: '016', nombre: 'Loreto' },
    { codigo: '152', provinciaCodigo: '016', nombre: 'Mariscal Ramon Castilla' },
    { codigo: '153', provinciaCodigo: '016', nombre: 'Maynas' },
    { codigo: '154', provinciaCodigo: '016', nombre: 'Requena' },
    { codigo: '155', provinciaCodigo: '016', nombre: 'Ucayali' },
    // Madre de Dios
    { codigo: '156', provinciaCodigo: '017', nombre: 'Puerto Maldonado' },
    { codigo: '157', provinciaCodigo: '017', nombre: 'Manu' },
    { codigo: '158', provinciaCodigo: '017', nombre: 'Tahuamanu' },
    // Moquegua
    { codigo: '159', provinciaCodigo: '018', nombre: 'Mariscal Nieto' },
    { codigo: '160', provinciaCodigo: '018', nombre: 'General Sanchez Cerro' },
    { codigo: '161', provinciaCodigo: '018', nombre: 'Ilo' },
    // Pasco
    { codigo: '162', provinciaCodigo: '019', nombre: 'Pasco' },
    { codigo: '163', provinciaCodigo: '019', nombre: 'Daniel Alcides Carrión' },
    { codigo: '164', provinciaCodigo: '019', nombre: 'Oxapampa' },
    // Piura
    { codigo: '165', provinciaCodigo: '020', nombre: 'Piura' },
    { codigo: '166', provinciaCodigo: '020', nombre: 'Ayabaca' },
    { codigo: '167', provinciaCodigo: '020', nombre: 'Huancabamba' },
    { codigo: '168', provinciaCodigo: '020', nombre: 'Morropon' },
    { codigo: '169', provinciaCodigo: '020', nombre: 'Paita' },
    { codigo: '170', provinciaCodigo: '020', nombre: 'Sullana' },
    { codigo: '171', provinciaCodigo: '020', nombre: 'Talara' },
    // Puno
    { codigo: '172', provinciaCodigo: '021', nombre: 'Puno' },
    { codigo: '173', provinciaCodigo: '021', nombre: 'Azangaro' },
    { codigo: '174', provinciaCodigo: '021', nombre: 'Carabaya' },
    { codigo: '175', provinciaCodigo: '021', nombre: 'Chucuito' },
    { codigo: '176', provinciaCodigo: '021', nombre: 'El Collao' },
    { codigo: '177', provinciaCodigo: '021', nombre: 'Huancane' },
    { codigo: '178', provinciaCodigo: '021', nombre: 'Lampa' },
    { codigo: '179', provinciaCodigo: '021', nombre: 'Melgar' },
    { codigo: '180', provinciaCodigo: '021', nombre: 'Moho' },
    { codigo: '181', provinciaCodigo: '021', nombre: 'San Antonio de Putina' },
    { codigo: '182', provinciaCodigo: '021', nombre: 'San Roman' },
    { codigo: '183', provinciaCodigo: '021', nombre: 'Sandia' },
    { codigo: '184', provinciaCodigo: '021', nombre: 'Yunguyo' },
    // San Martín
    { codigo: '185', provinciaCodigo: '022', nombre: 'Moyobamba' },
    { codigo: '186', provinciaCodigo: '022', nombre: 'Bellavista' },
    { codigo: '187', provinciaCodigo: '022', nombre: 'El Dorado' },
    { codigo: '188', provinciaCodigo: '022', nombre: 'Huallaga' },
    { codigo: '189', provinciaCodigo: '022', nombre: 'Lamas' },
    { codigo: '190', provinciaCodigo: '022', nombre: 'Mariscal Caceres' },
    { codigo: '191', provinciaCodigo: '022', nombre: 'Picota' },
    { codigo: '192', provinciaCodigo: '022', nombre: 'Rioja' },
    { codigo: '193', provinciaCodigo: '022', nombre: 'San Martin' },
    { codigo: '194', provinciaCodigo: '022', nombre: 'Tocache' },
    // Tacna
    { codigo: '195', provinciaCodigo: '023', nombre: 'Tacna' },
    { codigo: '196', provinciaCodigo: '023', nombre: 'Candarave' },
    { codigo: '197', provinciaCodigo: '023', nombre: 'Jorge Basadre' },
    { codigo: '198', provinciaCodigo: '023', nombre: 'Tacna' },
    // Tumbes
    { codigo: '199', provinciaCodigo: '024', nombre: 'Tumbes' },
    { codigo: '200', provinciaCodigo: '024', nombre: 'Contralmirante Villar' },
    { codigo: '201', provinciaCodigo: '024', nombre: 'Zarumilla' },
    // Ucayali
    { codigo: '202', provinciaCodigo: '025', nombre: 'Coronel Portillo' },
    { codigo: '203', provinciaCodigo: '025', nombre: 'Atalaya' },
    { codigo: '204', provinciaCodigo: '025', nombre: 'Padre Abad' },
    { codigo: '205', provinciaCodigo: '025', nombre: 'Purus' },
  ];
  provinciasFiltradas: Provincia[] = [];
  departamentosCompleta: Departamento[] = [
    // Amazonas
    { codigo: '001', provinciaCodigo: '001', nombre: 'Chachapoyas' },
    { codigo: '002', provinciaCodigo: '001', nombre: 'Bagua' },
    { codigo: '003', provinciaCodigo: '001', nombre: 'Bongara' },
    { codigo: '004', provinciaCodigo: '001', nombre: 'Condorcanqui' },
    { codigo: '005', provinciaCodigo: '001', nombre: 'Luya' },
    { codigo: '006', provinciaCodigo: '001', nombre: 'Rodriguez de Mendoza' },
    { codigo: '007', provinciaCodigo: '001', nombre: 'Utcubamba' },
    { codigo: '008', provinciaCodigo: '001', nombre: 'Amazonas' },
    // Ancash
    { codigo: '009', provinciaCodigo: '002', nombre: 'Huaraz' },
    { codigo: '010', provinciaCodigo: '002', nombre: 'Aija' },
    { codigo: '011', provinciaCodigo: '002', nombre: 'Antonio Raymondi' },
    { codigo: '012', provinciaCodigo: '002', nombre: 'Asuncion' },
    { codigo: '013', provinciaCodigo: '002', nombre: 'Bolognesi' },
    { codigo: '014', provinciaCodigo: '002', nombre: 'Carhuaz' },
    { codigo: '015', provinciaCodigo: '002', nombre: 'Carlos Fermin Fitzcarrald' },
    { codigo: '016', provinciaCodigo: '002', nombre: 'Casma' },
    { codigo: '017', provinciaCodigo: '002', nombre: 'Corongo' },
    { codigo: '018', provinciaCodigo: '002', nombre: 'Huari' },
    { codigo: '019', provinciaCodigo: '002', nombre: 'Huarmey' },
    { codigo: '020', provinciaCodigo: '002', nombre: 'Huaylas' },
    { codigo: '021', provinciaCodigo: '002', nombre: 'Mariscal Luzuriaga' },
    { codigo: '022', provinciaCodigo: '002', nombre: 'Ocros' },
    { codigo: '023', provinciaCodigo: '002', nombre: 'Pallasca' },
    { codigo: '024', provinciaCodigo: '002', nombre: 'Pomabamba' },
    { codigo: '025', provinciaCodigo: '002', nombre: 'Recuay' },
    { codigo: '026', provinciaCodigo: '002', nombre: 'Santa' },
    { codigo: '027', provinciaCodigo: '002', nombre: 'Sihuas' },
    { codigo: '028', provinciaCodigo: '002', nombre: 'Yungay' },
    // Apurímac
    { codigo: '029', provinciaCodigo: '003', nombre: 'Abancay' },
    { codigo: '030', provinciaCodigo: '003', nombre: 'Andahuaylas' },
    { codigo: '031', provinciaCodigo: '003', nombre: 'Antabamba' },
    { codigo: '032', provinciaCodigo: '003', nombre: 'Aymaraes' },
    { codigo: '033', provinciaCodigo: '003', nombre: 'Cotabambas' },
    { codigo: '034', provinciaCodigo: '003', nombre: 'Chincheros' },
    { codigo: '035', provinciaCodigo: '003', nombre: 'Grau' },
    // Arequipa
    { codigo: '036', provinciaCodigo: '004', nombre: 'Arequipa' },
    { codigo: '037', provinciaCodigo: '004', nombre: 'Camana' },
    { codigo: '038', provinciaCodigo: '004', nombre: 'Caraveli' },
    { codigo: '039', provinciaCodigo: '004', nombre: 'Castilla' },
    { codigo: '040', provinciaCodigo: '004', nombre: 'Caylloma' },
    { codigo: '041', provinciaCodigo: '004', nombre: 'Condesuyos' },
    { codigo: '042', provinciaCodigo: '004', nombre: 'Islay' },
    { codigo: '043', provinciaCodigo: '004', nombre: 'La Union' },
    // Ayacucho
    { codigo: '044', provinciaCodigo: '005', nombre: 'Huamanga' },
    { codigo: '045', provinciaCodigo: '005', nombre: 'Cangallo' },
    { codigo: '046', provinciaCodigo: '005', nombre: 'Huanca Sancos' },
    { codigo: '047', provinciaCodigo: '005', nombre: 'Huanta' },
    { codigo: '048', provinciaCodigo: '005', nombre: 'La Mar' },
    { codigo: '049', provinciaCodigo: '005', nombre: 'Lucanas' },
    { codigo: '050', provinciaCodigo: '005', nombre: 'Parinacochas' },
    { codigo: '051', provinciaCodigo: '005', nombre: 'Paucar del Sara Sara' },
    { codigo: '052', provinciaCodigo: '005', nombre: 'Sucre' },
    { codigo: '053', provinciaCodigo: '005', nombre: 'Victor Fajardo' },
    { codigo: '054', provinciaCodigo: '005', nombre: 'Vilcas Huaman' },
    { codigo: '055', provinciaCodigo: '005', nombre: 'Cangallo' },
    // Cajamarca
    { codigo: '056', provinciaCodigo: '006', nombre: 'Cajamarca' },
    { codigo: '057', provinciaCodigo: '006', nombre: 'Cajabamba' },
    { codigo: '058', provinciaCodigo: '006', nombre: 'Celendin' },
    { codigo: '059', provinciaCodigo: '006', nombre: 'Chota' },
    { codigo: '060', provinciaCodigo: '006', nombre: 'Contumaza' },
    { codigo: '061', provinciaCodigo: '006', nombre: 'Cutervo' },
    { codigo: '062', provinciaCodigo: '006', nombre: 'Hualgayoc' },
    { codigo: '063', provinciaCodigo: '006', nombre: 'Jaen' },
    { codigo: '064', provinciaCodigo: '006', nombre: 'San Ignacio' },
    { codigo: '065', provinciaCodigo: '006', nombre: 'San Marcos' },
    { codigo: '066', provinciaCodigo: '006', nombre: 'San Miguel' },
    { codigo: '067', provinciaCodigo: '006', nombre: 'San Pablo' },
    { codigo: '068', provinciaCodigo: '006', nombre: 'Santa Cruz' },
    // Callao
    { codigo: '069', provinciaCodigo: '007', nombre: 'Callao' },
    // Cusco
    { codigo: '070', provinciaCodigo: '008', nombre: 'Cusco' },
    { codigo: '071', provinciaCodigo: '008', nombre: 'Acomayo' },
    { codigo: '072', provinciaCodigo: '008', nombre: 'Anta' },
    { codigo: '073', provinciaCodigo: '008', nombre: 'Calca' },
    { codigo: '074', provinciaCodigo: '008', nombre: 'Canas' },
    { codigo: '075', provinciaCodigo: '008', nombre: 'Canchis' },
    { codigo: '076', provinciaCodigo: '008', nombre: 'Chumbivilcas' },
    { codigo: '077', provinciaCodigo: '008', nombre: 'Espinar' },
    { codigo: '078', provinciaCodigo: '008', nombre: 'La Convencion' },
    { codigo: '079', provinciaCodigo: '008', nombre: 'Paruro' },
    { codigo: '080', provinciaCodigo: '008', nombre: 'Paucartambo' },
    { codigo: '081', provinciaCodigo: '008', nombre: 'Quispicanchi' },
    { codigo: '082', provinciaCodigo: '008', nombre: 'Urubamba' },
    // Huancavelica
    { codigo: '083', provinciaCodigo: '009', nombre: 'Huancavelica' },
    { codigo: '084', provinciaCodigo: '009', nombre: 'Acobamba' },
    { codigo: '085', provinciaCodigo: '009', nombre: 'Angaraes' },
    { codigo: '086', provinciaCodigo: '009', nombre: 'Castrovirreyna' },
    { codigo: '087', provinciaCodigo: '009', nombre: 'Churcampa' },
    { codigo: '088', provinciaCodigo: '009', nombre: 'Huaytara' },
    { codigo: '089', provinciaCodigo: '009', nombre: 'Tayacaja' },
    // Huánuco
    { codigo: '090', provinciaCodigo: '010', nombre: 'Huánuco' },
    { codigo: '091', provinciaCodigo: '010', nombre: 'Ambo' },
    { codigo: '092', provinciaCodigo: '010', nombre: 'Dos de Mayo' },
    { codigo: '093', provinciaCodigo: '010', nombre: 'Huacaybamba' },
    { codigo: '094', provinciaCodigo: '010', nombre: 'Huamalies' },
    { codigo: '095', provinciaCodigo: '010', nombre: 'Leoncio Prado' },
    { codigo: '096', provinciaCodigo: '010', nombre: 'Marañon' },
    { codigo: '097', provinciaCodigo: '010', nombre: 'Pachitea' },
    { codigo: '098', provinciaCodigo: '010', nombre: 'Puerto Inca' },
    { codigo: '099', provinciaCodigo: '010', nombre: 'Lauricocha' },
    { codigo: '100', provinciaCodigo: '010', nombre: 'Yarowilca' },
    // Ica
    { codigo: '101', provinciaCodigo: '011', nombre: 'Ica' },
    { codigo: '102', provinciaCodigo: '011', nombre: 'Chincha' },
    { codigo: '103', provinciaCodigo: '011', nombre: 'Nazca' },
    { codigo: '104', provinciaCodigo: '011', nombre: 'Palpa' },
    { codigo: '105', provinciaCodigo: '011', nombre: 'Pisco' },
    // Junín
    { codigo: '106', provinciaCodigo: '012', nombre: 'Huancayo' },
    { codigo: '107', provinciaCodigo: '012', nombre: 'Concepcion' },
    { codigo: '108', provinciaCodigo: '012', nombre: 'Chanchamayo' },
    { codigo: '109', provinciaCodigo: '012', nombre: 'Jauja' },
    { codigo: '110', provinciaCodigo: '012', nombre: 'Junin' },
    { codigo: '111', provinciaCodigo: '012', nombre: 'Satipo' },
    { codigo: '112', provinciaCodigo: '012', nombre: 'Tarma' },
    { codigo: '113', provinciaCodigo: '012', nombre: 'Yauli' },
    { codigo: '114', provinciaCodigo: '012', nombre: 'Chupaca' },
    // La Libertad
    { codigo: '115', provinciaCodigo: '013', nombre: 'Trujillo' },
    { codigo: '116', provinciaCodigo: '013', nombre: 'Ascope' },
    { codigo: '117', provinciaCodigo: '013', nombre: 'Bolivar' },
    { codigo: '118', provinciaCodigo: '013', nombre: 'Chepen' },
    { codigo: '119', provinciaCodigo: '013', nombre: 'Gran Chimu' },
    { codigo: '120', provinciaCodigo: '013', nombre: 'Julcan' },
    { codigo: '121', provinciaCodigo: '013', nombre: 'Otuzco' },
    { codigo: '122', provinciaCodigo: '013', nombre: 'Pacasmayo' },
    { codigo: '123', provinciaCodigo: '013', nombre: 'Pataz' },
    { codigo: '124', provinciaCodigo: '013', nombre: 'Sanchez Carrion' },
    { codigo: '125', provinciaCodigo: '013', nombre: 'Santiago de Chuco' },
    { codigo: '126', provinciaCodigo: '013', nombre: 'Viru' },
    // Lambayeque
    { codigo: '127', provinciaCodigo: '014', nombre: 'Chiclayo' },
    { codigo: '128', provinciaCodigo: '014', nombre: 'Ferrenafe' },
    { codigo: '129', provinciaCodigo: '014', nombre: 'Lambayeque' },
    { codigo: '130', provinciaCodigo: '014', nombre: 'Morrope' },
    { codigo: '131', provinciaCodigo: '014', nombre: 'Motupe' },
    { codigo: '132', provinciaCodigo: '014', nombre: 'Olmos' },
    { codigo: '133', provinciaCodigo: '014', nombre: 'Pacora' },
    { codigo: '134', provinciaCodigo: '014', nombre: 'Salas' },
    { codigo: '135', provinciaCodigo: '014', nombre: 'San Ignacio' },
    { codigo: '136', provinciaCodigo: '014', nombre: 'Tucume' },
    // Lima
    { codigo: '137', provinciaCodigo: '015', nombre: 'Lima' },
    { codigo: '138', provinciaCodigo: '015', nombre: 'Barranca' },
    { codigo: '139', provinciaCodigo: '015', nombre: 'Cajatambo' },
    { codigo: '140', provinciaCodigo: '015', nombre: 'Callao' },
    { codigo: '141', provinciaCodigo: '015', nombre: 'Canta' },
    { codigo: '142', provinciaCodigo: '015', nombre: 'Cañete' },
    { codigo: '143', provinciaCodigo: '015', nombre: 'Huaral' },
    { codigo: '144', provinciaCodigo: '015', nombre: 'Huarochiri' },
    { codigo: '145', provinciaCodigo: '015', nombre: 'Huaura' },
    { codigo: '146', provinciaCodigo: '015', nombre: 'Oyon' },
    { codigo: '147', provinciaCodigo: '015', nombre: 'Yauyos' },
    // Loreto
    { codigo: '148', provinciaCodigo: '016', nombre: 'Iquitos' },
    { codigo: '149', provinciaCodigo: '016', nombre: 'Alto Amazonas' },
    { codigo: '150', provinciaCodigo: '016', nombre: 'Datem del Marañon' },
    { codigo: '151', provinciaCodigo: '016', nombre: 'Loreto' },
    { codigo: '152', provinciaCodigo: '016', nombre: 'Mariscal Ramon Castilla' },
    { codigo: '153', provinciaCodigo: '016', nombre: 'Maynas' },
    { codigo: '154', provinciaCodigo: '016', nombre: 'Requena' },
    { codigo: '155', provinciaCodigo: '016', nombre: 'Ucayali' },
    // Madre de Dios
    { codigo: '156', provinciaCodigo: '017', nombre: 'Puerto Maldonado' },
    { codigo: '157', provinciaCodigo: '017', nombre: 'Manu' },
    { codigo: '158', provinciaCodigo: '017', nombre: 'Tahuamanu' },
    // Moquegua
    { codigo: '159', provinciaCodigo: '018', nombre: 'Mariscal Nieto' },
    { codigo: '160', provinciaCodigo: '018', nombre: 'General Sanchez Cerro' },
    { codigo: '161', provinciaCodigo: '018', nombre: 'Ilo' },
    // Pasco
    { codigo: '162', provinciaCodigo: '019', nombre: 'Pasco' },
    { codigo: '163', provinciaCodigo: '019', nombre: 'Daniel Alcides Carrión' },
    { codigo: '164', provinciaCodigo: '019', nombre: 'Oxapampa' },
    // Piura
    { codigo: '165', provinciaCodigo: '020', nombre: 'Piura' },
    { codigo: '166', provinciaCodigo: '020', nombre: 'Ayabaca' },
    { codigo: '167', provinciaCodigo: '020', nombre: 'Huancabamba' },
    { codigo: '168', provinciaCodigo: '020', nombre: 'Morropon' },
    { codigo: '169', provinciaCodigo: '020', nombre: 'Paita' },
    { codigo: '170', provinciaCodigo: '020', nombre: 'Sullana' },
    { codigo: '171', provinciaCodigo: '020', nombre: 'Talara' },
    // Puno
    { codigo: '172', provinciaCodigo: '021', nombre: 'Puno' },
    { codigo: '173', provinciaCodigo: '021', nombre: 'Azangaro' },
    { codigo: '174', provinciaCodigo: '021', nombre: 'Carabaya' },
    { codigo: '175', provinciaCodigo: '021', nombre: 'Chucuito' },
    { codigo: '176', provinciaCodigo: '021', nombre: 'El Collao' },
    { codigo: '177', provinciaCodigo: '021', nombre: 'Huancane' },
    { codigo: '178', provinciaCodigo: '021', nombre: 'Lampa' },
    { codigo: '179', provinciaCodigo: '021', nombre: 'Melgar' },
    { codigo: '180', provinciaCodigo: '021', nombre: 'Moho' },
    { codigo: '181', provinciaCodigo: '021', nombre: 'San Antonio de Putina' },
    { codigo: '182', provinciaCodigo: '021', nombre: 'San Roman' },
    { codigo: '183', provinciaCodigo: '021', nombre: 'Sandia' },
    { codigo: '184', provinciaCodigo: '021', nombre: 'Yunguyo' },
    // San Martín
    { codigo: '185', provinciaCodigo: '022', nombre: 'Moyobamba' },
    { codigo: '186', provinciaCodigo: '022', nombre: 'Bellavista' },
    { codigo: '187', provinciaCodigo: '022', nombre: 'El Dorado' },
    { codigo: '188', provinciaCodigo: '022', nombre: 'Huallaga' },
    { codigo: '189', provinciaCodigo: '022', nombre: 'Lamas' },
    { codigo: '190', provinciaCodigo: '022', nombre: 'Mariscal Caceres' },
    { codigo: '191', provinciaCodigo: '022', nombre: 'Picota' },
    { codigo: '192', provinciaCodigo: '022', nombre: 'Rioja' },
    { codigo: '193', provinciaCodigo: '022', nombre: 'San Martin' },
    { codigo: '194', provinciaCodigo: '022', nombre: 'Tocache' },
    // Tacna
    { codigo: '195', provinciaCodigo: '023', nombre: 'Tacna' },
    { codigo: '196', provinciaCodigo: '023', nombre: 'Candarave' },
    { codigo: '197', provinciaCodigo: '023', nombre: 'Jorge Basadre' },
    { codigo: '198', provinciaCodigo: '023', nombre: 'Tacna' },
    // Tumbes
    { codigo: '199', provinciaCodigo: '024', nombre: 'Tumbes' },
    { codigo: '200', provinciaCodigo: '024', nombre: 'Contralmirante Villar' },
    { codigo: '201', provinciaCodigo: '024', nombre: 'Zarumilla' },
    // Ucayali
    { codigo: '202', provinciaCodigo: '025', nombre: 'Coronel Portillo' },
    { codigo: '203', provinciaCodigo: '025', nombre: 'Atalaya' },
    { codigo: '204', provinciaCodigo: '025', nombre: 'Padre Abad' },
    { codigo: '205', provinciaCodigo: '025', nombre: 'Purus' },
  ]; // Llena con todos los departamentos
  filtrarDepartamentos() {
    // Restablecer la lista completa de departamentos
    this.departamentos = [...this.departamentosCompleta];

    // Obtener la provincia seleccionada
    const provinciaSeleccionada = this.provincias.find(provincia => provincia.codigo === this.selectedProvincia);

    // Filtrar departamentos si se ha seleccionado una provincia
    if (provinciaSeleccionada) {
      this.departamentos = this.departamentos.filter(depto => depto.provinciaCodigo === provinciaSeleccionada.codigo);
    }
  }

  siguientePaso() {
    if (this.pasoActual < 4) {
      this.pasoActual++;
    }
  }

  anteriorPaso() {
    if (this.pasoActual > 1) {
      this.pasoActual--;
    }
  }

  cancelar() {
    // Aquí puedes implementar la lógica para cancelar el registro.
    window.alert('Seguro que desea cancelar su registro');
  }
}
