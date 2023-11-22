const { initializeApp } = require('firebase/app');
const { getStorage, ref, deleteObject } = require('firebase/storage');

/* DADOS DE ACESSO AO FIREBASE */
const firebaseConfig = {
    apiKey: "AIzaSyBWUHivXBVltLdLB3xqQdOD6Nwk5lrDraw",
    authDomain: "atv-pw2-etec.firebaseapp.com",
    projectId: "atv-pw2-etec",
    storageBucket: "atv-pw2-etec.appspot.com",
    messagingSenderId: "13599851657",
    appId: "1:13599851657:web:eb3bb229c1ddd0a3aaf258",
    measurementId: "G-XCRESGVRHM"
};

/* INICIALIZAÇÃO DO FIREBASE */
const firebaseApp = initializeApp(firebaseConfig);

/* INICIALIZAÇÃO DO STORAGE DO FIREBASE */
const storage = getStorage(firebaseApp);

const deleteImage = (imagem) => {

    const deleteRef = ref(storage, imagem);

    deleteObject(deleteRef)
        .then(() => {
            console.log('IMAGEM EXCLUÍDA COM SUCESSO!');
        })
        .catch((error) => {
            console.log('ERRO AO EXCLUIR IMAGEM!');
        });

}

module.exports = deleteImage;