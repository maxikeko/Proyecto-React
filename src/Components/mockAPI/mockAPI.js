//simulacion base de datos
const data = [
  {
    id: 1,
    title: "Mother Biostar H610MH",
    price: 19150,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30896_Mother_Biostar_H610MH_12va_Gen_S1700_b1e0250e-grn.jpg",
    category: "Motherboard",
    stock: 10,
    detail:
      "Support for 12th/ 13th Generation Intel Core™ i9/ i7/ i5/ i3 processors and Intel Supports Dual Channel DDR4 1866/ 2133/ 2400/ 2666/ 2933/ 3200",
  },
  {
    id: 2,
    title: "Mother MSI PRO B660M-G",
    price: 31500,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31847_Mother_MSI_PRO_B660M-A_DDR4_s1700_1ed9ab1e-grn.jpg",
    category: "Motherboard",
    stock: 10,
    detail:
      "Supports 12th Gen Intel® Core™, Pentium® Gold and Celeron® processors for LGA 1700 socket Supports DDR4 Memory, up to 4600+(OC) MHz Core Boost : With premium layout and digital power design to support more cores and provide better performance",
  },
  {
    id: 3,
    title: "Mother ASUS ROG STRIX Z690-F GAMING",
    price: 91500,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30435_Mother_ASUS_ROG_STRIX_Z690-F_GAMING_WIFI_S1700_cf80bb79-grn.jpg",
    category: "Motherboard",
    stock: 10,
    detail:
      "Tarjeta madre Intel® Z690 LGA 1700 ATX con PCIe® 5.0, 16 + 1 fases de poder, soporte de memoria DDR5, cancelación de ruido de IA bidireccional, AI Overclocking, AI Cooling, AI Networking, WiFi 6E (802.11ax), Intel® Ethernet de 2.5 Gb, cuatro puertos M.2 con disipadores de calor, compatibilidad con PCIe 4.0 NVMe® SSD, placa posterior M.2, PCIe® Slot Q-Release, USB 3.2 Gen 2x2 Type-C®, iluminación SATA y Aura Sync RGB.",
  },
  {
    id: 4,
    title: "Procesador Intel Core i3",
    price: 28050,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31720_Procesador_Intel_Core_i3_12100F_12th_Gen_S1700_Sin_Video_3621db10-grn.jpg",
    category: "Procesador",
    stock: 10,
    detail:
      "Cantidad de núcleos 4 Cantidad de subprocesos 8 Frecuencia turbo máxima 4.30ghz",
  },
  {
    id: 5,
    title: "Procesador Intel Core i5",
    price: 54100,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29674_Procesador_Intel_Core_i5_12400_Socket_1700_98f9c5af-grn.jpg",
    category: "Procesador",
    stock: 10,
    detail:
      "Cantidad de núcleos 6 Cantidad de subprocesos 12 Frecuencia turbo máxima 4.40ghz",
  },
  {
    id: 6,
    title: "Procesador Intel Core i7",
    price: 92500,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31465_Procesador_Intel_Core_i7_12700_S1700_12th_Gen_9fb0b45d-grn.jpg",
    category: "Procesador",
    stock: 10,
    detail:
      "Cantidad de núcleos 12 Cantidad de subprocesos 20 Frecuencia turbo máxima 4.90ghz",
  },
  {
    id: 7,
    title: "Memoria Ram Geil 8gb",
    price: 8800,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28202_Memoria_GeiL_DDR4_8GB_2666MHz_EVO_Potenza_Black_e922a2ab-grn.jpg",
    category: "Ram",
    stock: 10,
    detail: "3600mhz",
  },
  {
    id: 8,
    title: "Memoria Ram Team 16GB",
    price: 16900,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32216_Memoria_Team_DDR4_16GB_3200MHz_T-Force_Zeus_5f3acf99-grn.jpg",
    category: "Ram",
    stock: 10,
    detail: "3200Mhz",
  },
  {
    id: 9,
    title: "Memoria Ram Patriot Viper 32GB",
    price: 42600,
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30279_Memoria_Patriot_Viper_DDR4_32GB__2x16GB__3200Mhz_Steel_RGB_Black_c832d691-grn.jpg",
    category: "Ram",
    stock: 10,
    detail: "3200MHZ RGB",
  },
];

// promesa con timeout
export function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export function getUnProducto(idParams) {
  return new Promise((resolve, reject) => {
    let productoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    
    setTimeout(() => {
      resolve(productoReq);
    }, 2000);
  });
}

export function getProductsByCategory(idCategory){

    return new Promise((resolve, reject) => {
        let filtroProductos = data.filter((item) => {
          return item.category === idCategory;
        });
        
        setTimeout(() => {
          resolve(filtroProductos);
        }, 2000);
      });

}