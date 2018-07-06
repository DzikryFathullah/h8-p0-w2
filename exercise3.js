var nama = 'Dzikry';
var peran = 'penyihir';
if (nama=='' || peran=='') {
  console.log('Nama harus diisi!!');
}else switch (peran){
  case 'ksatria': {console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu');break;}
  case 'tabib': {console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka');break;}
  case 'penyihir': {console.log('Selamat datang di dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');break;}
  default: {console.log('Hallo '+ nama + ', pilih peranmu untuk memulai game!');}
}
