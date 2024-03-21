'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "15e0fb1375dc3ad6de7480d5adfad831",
"index.html": "177dc36c137571e9944ff4f9d381b4b5",
"/": "177dc36c137571e9944ff4f9d381b4b5",
"main.dart.js": "018af73b3187488ee5d325226b51ff63",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "847da2b9fc444998e8c940a73536f4d3",
"icons/Icon-192.png": "b04ee4f4a813e426b5eee1c9bd596b79",
"icons/Icon-maskable-192.png": "b04ee4f4a813e426b5eee1c9bd596b79",
"icons/Icon-maskable-512.png": "df47bf6b4508b5d78e0d956d0e6c77e0",
"icons/Icon-512.png": "df47bf6b4508b5d78e0d956d0e6c77e0",
"manifest.json": "b6a3ae9dae2e1bc286c4f95ff3b84b60",
"assets/AssetManifest.json": "bbe3f700cb4b091b25b30970ed96ef31",
"assets/NOTICES": "050a27cd4e3c8c807dfb1ad2c7e25294",
"assets/FontManifest.json": "a52f2e341c0bf816d48dac083130671f",
"assets/AssetManifest.bin.json": "5f59162debef06cb85ed2fde7589f903",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "5773db5a60dfe7785bd34d3d370acfb7",
"assets/fonts/MaterialIcons-Regular.otf": "f3b51037b14ae38e6a080cc21bb0f5c0",
"assets/assets/logo.png": "602e7556632acc5d87b975f5e5c59312",
"assets/assets/book/9.pdf": "3515c905f781c4bf0f37214f4f95d253",
"assets/assets/book/8.pdf": "6a86a4f850beaa15d026c3e648bdd553",
"assets/assets/book/6.pdf": "8b3b8001b67715c292090e88ed397370",
"assets/assets/book/7.pdf": "57c584b27b17071811660bbc97c86c3e",
"assets/assets/book/5.pdf": "5a8a514bb16a4eae6b1806c25685e835",
"assets/assets/book/4.pdf": "b4a17ae7ef03216ef6d4cba2dbb8714c",
"assets/assets/book/1.pdf": "f554e7c6d389bfed3332b1ed27215015",
"assets/assets/book/3.pdf": "cb7fc27d411194e4cfa4651ad3bf3e25",
"assets/assets/book/2.pdf": "0f730f1da1414597d869bab166a7a21e",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/games/images/puzzle.jpg": "991dccec99340043fddb3b35cc267de1",
"assets/assets/games/images/crossword.jpg": "eee7e0e32828c67bd3eafcd890deaef8",
"assets/assets/games/images/test.jpg": "a3d181aee14500b8ff1fc5aef4fc0bc3",
"assets/assets/games/images/img_test.jpg": "7f507c8780e4890fed2c198d7032481b",
"assets/assets/games/croswords/Du%25CC%2588zu%25CC%2588minde%2520nem%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.csv": "d406460027ac3706910f332d5f2a95f8",
"assets/assets/games/croswords/Hinolin%2520we%2520izohinolin%2520alkoloidler.csv": "a5fb8e6c4f218a1c453404f1e7436408",
"assets/assets/games/croswords/Flawanoidleri%2520saklay%25CC%2581anlar.csv": "69bbc4d846f9ec70349752f6da8de698",
"assets/assets/games/croswords/Witamin%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.txt": "8699b2b92932691688b26792d9bb8fe3",
"assets/assets/games/croswords/Alkoloidler.csv": "4b19579f3d8536c2d9c09f3f87c4951b",
"assets/assets/games/croswords/Purin%2520alk.%2520saklay%25CC%2581an%2520d%2520o%25CC%2588s.txt": "0e4a4f20241289c374c46cfe83843475",
"assets/assets/games/croswords/Kumarinler%2520we%2520hromonlar.csv": "124299570b2ec4726cb98fb198701bb5",
"assets/assets/games/croswords/Krahmal%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.csv": "92fd1653ddaac4f43df5356149bff289",
"assets/assets/games/croswords/Piridin%2520alkoloidleri%2520saklay%25CC%2581an%2520o%25CC%2588su%25CC%2588mlikler.txt": "07c90b83a3efde74d63f5c8deabddefd",
"assets/assets/games/croswords/Ey%25CC%2581ley%25CC%2581ji%2520maddalar.csv": "7a03f2e5f6d68adcbffe59d8cc798f51",
"assets/assets/games/croswords/Indol%2520saklay%25CC%2581an%2520d%2520o%25CC%2588s.txt": "7fbd80163c5dc3dea16332932aa0caed",
"assets/assets/games/croswords/Fenollar%2520we%2520liganlar%2520krossword.csv": "c53ed1ca8d928ca4f8a8a3685bf2b91e",
"assets/assets/games/croswords/Efie%2520y%25CC%2581aglaryny%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.txt": "e13253bccbf37505192545ad9b64a75b",
"assets/assets/games/croswords/Du%25CC%2588zu%25CC%2588minde%2520s%25CC%25A7epbik%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.csv": "d224a4231ae1637d4b403de457a3975c",
"assets/assets/games/croswords/Inulin%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.txt": "4689896994252c60b43334bc26b146cd",
"assets/assets/games/croswords/Du%25CC%2588zu%25CC%2588minde%2520nem%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.txt": "b7c388787569811888f306ed223b0306",
"assets/assets/games/croswords/Hinolin%2520we%2520izohinolin%2520alkoloidler.txt": "509f8afdea28b80829947caae396790a",
"assets/assets/games/croswords/Flawanoidleri%2520saklay%25CC%2581anlar.txt": "cabfe41dabafe383ff9c248d01ffd186",
"assets/assets/games/croswords/Piridin%2520alkoloidleri%2520saklay%25CC%2581an%2520o%25CC%2588su%25CC%2588mlikler.csv": "a6650c12917268d32ec4e68a01238d7a",
"assets/assets/games/croswords/Ey%25CC%2581ley%25CC%2581ji%2520maddalar.txt": "a694210ad66b5d674cc6b07a246ad97c",
"assets/assets/games/croswords/Indol%2520saklay%25CC%2581an%2520d%2520o%25CC%2588s.csv": "8a0d659fb12b1a98023d85c253b7a205",
"assets/assets/games/croswords/Witamin%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.csv": "8ee4c67a1be9168327630f23786cc75f",
"assets/assets/games/croswords/Alkoloidler.txt": "1556834555baf028097b75b716c80192",
"assets/assets/games/croswords/Purin%2520alk.%2520saklay%25CC%2581an%2520d%2520o%25CC%2588s.csv": "c6597e94b747ecedd502b850f41a9d9b",
"assets/assets/games/croswords/Kumarinler%2520we%2520hromonlar.txt": "b9d4dff2475978ddf9a5bebb646d7a29",
"assets/assets/games/croswords/Krahmal%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.txt": "41b4f1ed09880157cb2b2e95cb5007d3",
"assets/assets/games/croswords/Inulin%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.csv": "c09b3c26b3dbb813a0d3969092081aba",
"assets/assets/games/croswords/Fenollar%2520we%2520liganlar%2520krossword.txt": "a7746cb8a7d4f9eeabba837e86963c57",
"assets/assets/games/croswords/Efie%2520y%25CC%2581aglaryny%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.csv": "887ac1064935384931d992fec7b01cc1",
"assets/assets/games/croswords/Du%25CC%2588zu%25CC%2588minde%2520s%25CC%25A7epbik%2520saklay%25CC%2581an%2520derman%2520o%25CC%2588su%25CC%2588mlikler.txt": "bcbf3a680530fb91a166d478b4bb63b2",
"assets/assets/games/tests/Farmakognozi%25C3%25BDa%2520ylmy.txt": "ec87ec06737ca9eb74a6dbea103b157a",
"assets/assets/games/tests/Purin%2520we%2520hinozolin,%2520diterpen%2520we%2520steroid%2520alkaloidlerini%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "2dea007b0451fe81dba07507d8242351",
"assets/assets/games/tests/Farmakagnozi%25C3%25BDa%25203%2520%25C3%25BDyl%2520N1.txt": "78b77e0b6cbf6155aec13f1c07715775",
"assets/assets/games/tests/Farmakognozi%25C3%25BDa%25203%2520%25C3%25BDyl%2520N%25203%2520Polisaharidler.txt": "b281dd4eca72a8eef904803fc61ba609",
"assets/assets/games/tests/Kumarinleri%2520we%2520hromonlary%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "c2f75a51414c11d8e7bee3710ec7914c",
"assets/assets/games/tests/Farmakagnozi%25C3%25BDa%25203%2520%25C3%25BDyl%2520N2.txt": "300de604dfe32ad0b9ea35fa935f8711",
"assets/assets/games/tests/Antrasen%2520%25C3%25B6n%25C3%25BCmlerini%2520we%2520onu%25C5%2588%2520glikozidlerini%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikleri%2520we%2520%25C3%25A7ig%2520mallary.txt": "92f6b52e413e539946ae0601ec05ef94",
"assets/assets/games/tests/%25C3%259D%25C3%25BCrek%2520glikozid.txt": "aeb805656681e27474b6868887f4944d",
"assets/assets/games/tests/Farmakognozi%25C3%25BDa%25203%2520%25C3%25BDyl%2520N%25204%2520Witaminler.txt": "52ad2d539aff53c4aa6c6fff80dfb3e8",
"assets/assets/games/tests/Alkoloidleri%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "de795b462fee9abb66702b89ca15e8a1",
"assets/assets/games/tests/Polisaharidleri%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "46627e81436fe0373b359c0a4985d1a8",
"assets/assets/games/tests/Farmakognozi%25C3%25BDa%2520N%25206%2520Efir%2520%25C3%25BDaglary.txt": "1f23a913ade7372c8b4b4c2d6cff310e",
"assets/assets/games/tests/Indol%2520alkaloidleri%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "6f157a34fd47da858f843f82e84b3ce9",
"assets/assets/games/tests/Hinolizidin,%2520piridin%2520we%2520piperidin%2520alkoloidleri%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikleri.txt": "5fcbf7e0ee57b95d222d9e91be0d7b79",
"assets/assets/games/tests/Hinolin%2520we%2520Izohinolin%2520alkaloidleri%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "49e16f4b2a28b304b6651584802c7efe",
"assets/assets/games/tests/Flawanoidleri%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikleri.txt": "3673049176cb63bf01a89eade02bd98d",
"assets/assets/games/tests/Farmakognozi%25C3%25BDa%2520N%25204%2520Witaminler.txt": "f6ca6b36f6b1ae62536cf9c28dad186d",
"assets/assets/games/tests/E%25C3%25BDle%25C3%25BDji%2520maddalary%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikler.txt": "f2c0b3a47dc17f8c9e34b815360b6f78",
"assets/assets/games/tests/Farmakognozi%25C3%25BDa%2520N%25205%2520%25C3%25BDaglar.txt": "eab8cc55496c78bcdc279ef87e7aeb9b",
"assets/assets/games/tests/Fenol%2520glikozidleri%2520we%2520lignanlary%2520sakla%25C3%25BDan%2520derman%2520%25C3%25B6s%25C3%25BCmlikleri%2520hem-de%2520olary%25C5%2588%2520derman%25C3%25A7ylyk%2520%25C3%25A7ig%2520mallary.txt": "3a5a543df163a006397d92773d603187",
"assets/assets/games/logos/63.jpg": "a2b67e37de332c6c61290279ca3a670a",
"assets/assets/games/logos/189.jpg": "9835bf5642a5d55731e51cd3862b5e3e",
"assets/assets/games/logos/77.jpg": "056155e08a5eca2639bdda6263309076",
"assets/assets/games/logos/162.jpg": "77446b27b6607a3fe63745df474efad3",
"assets/assets/games/logos/176.jpg": "9a3ca2765669b66a0c7739eccccccffc",
"assets/assets/games/logos/88.jpg": "1573967dfad848d190f9ab53fb8ca3e9",
"assets/assets/games/logos/228.jpg": "e4691374549cc043509b7cbbb6a3c48b",
"assets/assets/games/logos/214.jpg": "0e986a2cd29c30c1becc9acf077ba4b2",
"assets/assets/games/logos/200.jpg": "d2803293f89a58a46b2b5805583b5da4",
"assets/assets/games/logos/201.jpg": "a72809e2114d53b6a16cbbe445f28489",
"assets/assets/games/logos/215.jpg": "2b45b3a7ecdef1642eade6aeb40e4e2b",
"assets/assets/games/logos/229.jpg": "afc3e5e76ca1ae015f869c33a504c47d",
"assets/assets/games/logos/177.jpg": "030a0c7ca4c38c53d78d6a10c46c2518",
"assets/assets/games/logos/89.jpg": "f158ddab431752bac836f3b97547bdfd",
"assets/assets/games/logos/163.jpg": "372343edfc8da68b93d3061c37c1cce3",
"assets/assets/games/logos/188.jpg": "8a090057520fe698781dc409def9ebd8",
"assets/assets/games/logos/76.jpg": "e6b01800694422a8cb5c97bd3a3b095e",
"assets/assets/games/logos/62.jpg": "b6aeeb7a8e8a32c3d5b5def147f3df0c",
"assets/assets/games/logos/74.jpg": "47c316060b645de314e49ceb03cf75c2",
"assets/assets/games/logos/60.jpg": "d7a1ef74b54545b267db8b3580f6ef2c",
"assets/assets/games/logos/48.jpg": "af89e4d8a31dcf0b9d05952fd9cc4085",
"assets/assets/games/logos/149.jpg": "3c73758245a523fc5921a2fb0b9f0459",
"assets/assets/games/logos/175.jpg": "be23d02b5be041ac399658081f4c1c38",
"assets/assets/games/logos/161.jpg": "4de9801c80fcc5c088a2f80ff98c820d",
"assets/assets/games/logos/203.jpg": "be14c19b71ee6445704b69606f6d3598",
"assets/assets/games/logos/217.jpg": "d86572e880be8d02650f18a8f147314c",
"assets/assets/games/logos/216.jpg": "6ac7c60e14deb0dcbbd39fd22bc580ff",
"assets/assets/games/logos/202.jpg": "8c2cf7e6a66fbba8043c12d417d8e5ed",
"assets/assets/games/logos/160.jpg": "41e9262481932037145823db9bf0c4d2",
"assets/assets/games/logos/174.jpg": "180797fe850f3578254cafe4a6375a7b",
"assets/assets/games/logos/148.jpg": "0a3aec59741621470ec8347fd15b92da",
"assets/assets/games/logos/49.jpg": "d6df12a6af6669ad77a49aa661165e5c",
"assets/assets/games/logos/61.jpg": "8cbafc16ecdd7415ba6c1ffbc42a4241",
"assets/assets/games/logos/75.jpg": "66d6b9ddfbc761b351c83e173adb5f0f",
"assets/assets/games/logos/59.jpg": "5ee6efa92eea7dbe921733d54be3d11c",
"assets/assets/games/logos/71.jpg": "8da8d56f54fac3ebf46cf9ae9e4f7135",
"assets/assets/games/logos/65.jpg": "d6883959a50d0708de84f652a55d8eb7",
"assets/assets/games/logos/170.jpg": "5389bddac00b538687725d8fe1bb6d8a",
"assets/assets/games/logos/158.jpg": "64c86858542680980ab207c540dba104",
"assets/assets/games/logos/206.jpg": "64b654d52b189817c0fa4422ee5a9bb2",
"assets/assets/games/logos/212.jpg": "f602b0bc0f63c87817fe4b5951c92713",
"assets/assets/games/logos/213.jpg": "9e0e9807e1a4ae23097c48d6294a0f7f",
"assets/assets/games/logos/207.jpg": "c3540c31ac4080dc113fc1c831ce76e4",
"assets/assets/games/logos/159.jpg": "9b1d4cce06a3da264d7917767dd183a5",
"assets/assets/games/logos/165.jpg": "2c3e15993b184becfbab1e2048f77e60",
"assets/assets/games/logos/171.jpg": "926b53ea2f9e52aa777ec54650629e3a",
"assets/assets/games/logos/64.jpg": "bf685258f96beee26123ab5c7459c910",
"assets/assets/games/logos/70.jpg": "5ba0becd48ba051e4a576978a0385574",
"assets/assets/games/logos/58.jpg": "601c6d459fe4ba7261820b877d25a747",
"assets/assets/games/logos/8.jpg": "eb9840bb8e4416c41d406e59df66719e",
"assets/assets/games/logos/198.jpg": "7fc3b1983de9228860ec0037661716ee",
"assets/assets/games/logos/66.jpg": "af43609add9e16b7b447d0aff00486f5",
"assets/assets/games/logos/72.jpg": "78b926df645b0f6e29ba46bbfaacf257",
"assets/assets/games/logos/167.jpg": "f71911afce2f30b1c70e6adc8847ca62",
"assets/assets/games/logos/99.jpg": "9100135f04906847431751d058d8a6aa",
"assets/assets/games/logos/173.jpg": "db722f5ada5befce9bcbad1e955150b9",
"assets/assets/games/logos/list.txt": "43d658ce8698e44dbef1aafee3744768",
"assets/assets/games/logos/211.jpg": "b689bb1734f19a575df0a2fdb39cb673",
"assets/assets/games/logos/205.jpg": "4ca3e1d76a1bd49c13d25b23b37e06f3",
"assets/assets/games/logos/239.jpg": "a98912441929af186f2d9f5c9abbbdc2",
"assets/assets/games/logos/238.jpg": "3b1696960defc5d45c489dc3a54b150a",
"assets/assets/games/logos/204.jpg": "48c1c424718602cf1b7682612d92dc9e",
"assets/assets/games/logos/210.jpg": "bec56633bf585cfc2322752b1473217e",
"assets/assets/games/logos/172.jpg": "22cb05f1232b5ba8ace0b0747ca621cf",
"assets/assets/games/logos/166.jpg": "4f058fc4c64348366b5d50bcb7c090ba",
"assets/assets/games/logos/98.jpg": "4c6bf8668f91bef4229c2f1ca0734884",
"assets/assets/games/logos/73.jpg": "374ec230bf39f0856cdc6be471ffba8c",
"assets/assets/games/logos/199.jpg": "fe8176ccbceb2657dbe48eb2a38163b1",
"assets/assets/games/logos/67.jpg": "280ed720193478e1bd15f5d8e8b53da4",
"assets/assets/games/logos/9.jpg": "417a7c4276b7ad405ff7641b899090b1",
"assets/assets/games/logos/14.jpg": "401e83b60ec9804c3b334a66503c043f",
"assets/assets/games/logos/28.jpg": "3c01451aac403b1ba4bbe53b7268981d",
"assets/assets/games/logos/129.jpg": "d4a402d8e09ceeb8a1e111881bd82c4b",
"assets/assets/games/logos/101.jpg": "ba67d6fd022a978ea346ea68646c0531",
"assets/assets/games/logos/115.jpg": "f68c445167256513b5d7de156bf9a993",
"assets/assets/games/logos/114.jpg": "1c0c94987c6db76014192f66d4a66194",
"assets/assets/games/logos/100.jpg": "048b74035542992258cf599f47c91eae",
"assets/assets/games/logos/128.jpg": "8bc2baaf6873d17bf8785f83acd3859f",
"assets/assets/games/logos/29.jpg": "97d334f60efbd6ab7c8ae1a76dc75b43",
"assets/assets/games/logos/15.jpg": "1a2a3c9e9621d53318c34f0e09f25f55",
"assets/assets/games/logos/17.jpg": "5f9f1fbb36c1222a6d5282689bf22f65",
"assets/assets/games/logos/116.jpg": "4f880cb726e4922edcaf50ab774f8856",
"assets/assets/games/logos/102.jpg": "dc73ed34209813fe35fa81b1f99f2daf",
"assets/assets/games/logos/103.jpg": "43fc9c29f4348b74787f9092286fea04",
"assets/assets/games/logos/117.jpg": "4c48edaa55a735c709f9bb8ac49f54fd",
"assets/assets/games/logos/16.jpg": "5967af241ab5bb4b430b71a768528f80",
"assets/assets/games/logos/12.jpg": "eb19245742d45b51ab461b068bf949df",
"assets/assets/games/logos/113.jpg": "b6c65005fed385bd7bdbb6d6f5507504",
"assets/assets/games/logos/107.jpg": "9144554b014fc190d32105568dcc1325",
"assets/assets/games/logos/106.jpg": "9688b31ef6bf65e610e687bcf2dff813",
"assets/assets/games/logos/112.jpg": "ce71514587533e2ae886d74023e33b69",
"assets/assets/games/logos/13.jpg": "7753541cc4ff10045a8084605b738b15",
"assets/assets/games/logos/39.jpg": "ef7057c2f89777df758d00a04b461399",
"assets/assets/games/logos/11.jpg": "eb746c1dac0dac46aac8601c235d6780",
"assets/assets/games/logos/104.jpg": "c12b11cba0974581af3bf9128a96feb0",
"assets/assets/games/logos/110.jpg": "b0f99847feecba91dbf19c5b80590c9a",
"assets/assets/games/logos/138.jpg": "80b52085a52cfcc9f118376dda4b9124",
"assets/assets/games/logos/139.jpg": "3b1c18388decf5aec3ec744296662dbf",
"assets/assets/games/logos/111.jpg": "5005a2a94f1d19b86edd81ebbb164f1c",
"assets/assets/games/logos/105.jpg": "eb0e116d3794f6dd8caf505b732caebf",
"assets/assets/games/logos/10.jpg": "9edf274c8922bdf2a61c2f1a0f37c37e",
"assets/assets/games/logos/38.jpg": "6de3b41dce089e31195b3a82011dba2b",
"assets/assets/games/logos/21.jpg": "251372ba28ec186aecfac4552efa96b1",
"assets/assets/games/logos/35.jpg": "a0b7614c1f7715f03a03e8abd6ec3ea3",
"assets/assets/games/logos/108.jpg": "458edfed0719abb61e7e50bd6cfe6c0f",
"assets/assets/games/logos/120.jpg": "f3c11963140b3967e04b42dd0c419c04",
"assets/assets/games/logos/134.jpg": "4f763c3b1baeb2802b155e496e2af895",
"assets/assets/games/logos/135.jpg": "5d7c859ce61080068ee4c0b913b9c7b7",
"assets/assets/games/logos/121.jpg": "8cf54f335ed5632b4de363228b5607b2",
"assets/assets/games/logos/109.jpg": "5f3681c0fff59a9130014c800a2b7847",
"assets/assets/games/logos/34.jpg": "7eb0c30b41c0c36ae86047612d179c85",
"assets/assets/games/logos/20.jpg": "4aba968543d16b68c806ccd3621775f4",
"assets/assets/games/logos/36.jpg": "265884e844f730168b2b88eaee6caa9c",
"assets/assets/games/logos/22.jpg": "cc02f712e6d69316e554dd20d7ee1f9d",
"assets/assets/games/logos/137.jpg": "1f135959a1fe4cba579449abc5b13e43",
"assets/assets/games/logos/123.jpg": "6b1732ba9d821ccfd7df75780bcda91e",
"assets/assets/games/logos/122.jpg": "52770cebc0c24fc3567e7a635f3ac31f",
"assets/assets/games/logos/136.jpg": "bbeb246ddc8f3a3444a2183c94fcaa65",
"assets/assets/games/logos/23.jpg": "8dfb1dfdf60629c64d5e3acf3e9f67ab",
"assets/assets/games/logos/37.jpg": "3c49e2c5c8bd52a113f5eaa54fbaef2e",
"assets/assets/games/logos/33.jpg": "a1f5aa94a6f4e075c3108a2c48eff716",
"assets/assets/games/logos/27.jpg": "edfe82655d45ab76f4e33a0a013b82b4",
"assets/assets/games/logos/132.jpg": "e623dc9270527dffe9e3a6513adb4d65",
"assets/assets/games/logos/126.jpg": "2ac565fb62407518e6a0cfdab676b9cd",
"assets/assets/games/logos/127.jpg": "23b644cd50dd0cb1c707fef1d829b98e",
"assets/assets/games/logos/133.jpg": "a84665a23972977bbbbd961442cd4e8a",
"assets/assets/games/logos/26.jpg": "2e7d6adaf03b09ff4e9c25a1594e10e8",
"assets/assets/games/logos/32.jpg": "01f616bf1b256040268d6365a3252160",
"assets/assets/games/logos/18.jpg": "efc661c27a0d9b216c78cec0778f0413",
"assets/assets/games/logos/24.jpg": "8843cb9831f7ace4b9e3e42b6d01ee52",
"assets/assets/games/logos/30.jpg": "ac5a4136dd26e24b1b84638c67e17b31",
"assets/assets/games/logos/125.jpg": "173a9ecb44baf2758295167bd6bfcafb",
"assets/assets/games/logos/131.jpg": "3af6b41c20411e3e469d435625d0e9a5",
"assets/assets/games/logos/119.jpg": "449688fd6b95965bea6d436eb54237d1",
"assets/assets/games/logos/118.jpg": "4e505211689653a9b197c634d60e58c4",
"assets/assets/games/logos/130.jpg": "93cc5505f077e26e1b54252be9aee449",
"assets/assets/games/logos/124.jpg": "9000f8582e5fe5fb0a7c1dcc55bae2a7",
"assets/assets/games/logos/31.jpg": "014fdf388eba0ab80034db837de8f497",
"assets/assets/games/logos/25.jpg": "0a4ca220e3bff6bf06c7b925cd4815c5",
"assets/assets/games/logos/19.jpg": "f38583dfa2a13525f75c6a2e8bf970e9",
"assets/assets/games/logos/42.jpg": "5fa3c1c76e36235688538386c852274f",
"assets/assets/games/logos/4.jpg": "822d0d7af5dfd2106083b8543d4b1445",
"assets/assets/games/logos/56.jpg": "34aaeaf0205d5fe516802ab30ffa45db",
"assets/assets/games/logos/180.jpg": "6b8e826e53e45c522422f5028783eef3",
"assets/assets/games/logos/194.jpg": "f3af0a3acba4efb925bc82a5230bbdc0",
"assets/assets/games/logos/81.jpg": "0d311bdc3eb8e7937984c0aac21fc44f",
"assets/assets/games/logos/95.jpg": "3323298d5cd1fa49bec5f41797b663fc",
"assets/assets/games/logos/143.jpg": "f821f64b642cb4da8cb27bc3952b40c5",
"assets/assets/games/logos/157.jpg": "06921a99e445acbde5147144e24e7b53",
"assets/assets/games/logos/209.jpg": "5ea464833fb592c0c58fd73210a682b9",
"assets/assets/games/logos/235.jpg": "cbb647cc9921b67130b2f6f37ba4788a",
"assets/assets/games/logos/221.jpg": "86af6db27a6e47a8298970825eb54701",
"assets/assets/games/logos/220.jpg": "c6d8dd89d03bba69b6b019dfee122a4b",
"assets/assets/games/logos/234.jpg": "62c07402688cb910d9d6428ba7c2c3bf",
"assets/assets/games/logos/156.jpg": "de24a4e8fea3351142edb7cf74c0408a",
"assets/assets/games/logos/142.jpg": "7ad363ef9a6f2967d0ac123498d7124e",
"assets/assets/games/logos/94.jpg": "da21791db7edae57597df99ba074797e",
"assets/assets/games/logos/80.jpg": "5eb78a519130b30d33d534d130662c17",
"assets/assets/games/logos/195.jpg": "94cd9270975977d659c4a839f07d5ea1",
"assets/assets/games/logos/181.jpg": "9b5d58b5abc229af4ab82bf4769ac914",
"assets/assets/games/logos/5.jpg": "e353a60bed694d8fe14f9e5db4b8dda9",
"assets/assets/games/logos/57.jpg": "4f53021f3626c3e2aec2a87018723d96",
"assets/assets/games/logos/43.jpg": "fdce8c76a8434de71398fd2191d08a4d",
"assets/assets/games/logos/55.jpg": "1453eaf1c2f930aee833dfe3c3f6ffa6",
"assets/assets/games/logos/7.jpg": "725ebf4df63711102b21447d6449e14e",
"assets/assets/games/logos/41.jpg": "8bda37c5d0a1e8c2758c3c0021e10114",
"assets/assets/games/logos/69.jpg": "4ba335e32501c49ea994a02220ac6779",
"assets/assets/games/logos/197.jpg": "7aeab7295eb694f548ca4a7ce399ec07",
"assets/assets/games/logos/183.jpg": "514757fb4bb706596e16754d1b4f2dfe",
"assets/assets/games/logos/96.jpg": "da93e44a2c90046f318ffa44f507c5c0",
"assets/assets/games/logos/168.jpg": "db8c7c9fb89121005b4fd3e0dcebab73",
"assets/assets/games/logos/82.jpg": "cb83a8fd842e28056dff124f7068c723",
"assets/assets/games/logos/154.jpg": "476f1363fe0c042890693671123fd66b",
"assets/assets/games/logos/140.jpg": "7d373dfda24c55eea76a2a98a5a01fd9",
"assets/assets/games/logos/222.jpg": "1ab53f3afa8045b9e16b9bc05aa704e8",
"assets/assets/games/logos/237.jpg": "6a0d3902876e1edda44c5f9ae5fe2058",
"assets/assets/games/logos/223.jpg": "278eb20df2a393de14fb28f065acd048",
"assets/assets/games/logos/141.jpg": "fd5e1333b49384349c545b9c6f27c72b",
"assets/assets/games/logos/155.jpg": "1e4801b9bf6f754fe87ca0e88303dd98",
"assets/assets/games/logos/83.jpg": "1424d28ccb1c697bb1133679e85cc649",
"assets/assets/games/logos/97.jpg": "aa2679d3dcd84b978c946b4913afea99",
"assets/assets/games/logos/182.jpg": "4ee356dbe108049b19a3ac87fde8e8b9",
"assets/assets/games/logos/68.jpg": "095389601b21170d676dfd87076600e5",
"assets/assets/games/logos/196.jpg": "760bb304f272fad52515a9ae8e7f3d9d",
"assets/assets/games/logos/40.jpg": "312fbeca7f0db3f1c7bbf4f107d387a1",
"assets/assets/games/logos/54.jpg": "ee5926003c4c1b58dcb0fbf9cf2fd655",
"assets/assets/games/logos/6.jpg": "bead046d723c0ac1fa764a6ec78c9826",
"assets/assets/games/logos/192.jpg": "6842d3f0a06501efbadeca908b2ef531",
"assets/assets/games/logos/78.jpg": "188899b635527f2d0501a190687355fa",
"assets/assets/games/logos/186.jpg": "44afb8ee987cbb8870a39b300a1507dc",
"assets/assets/games/logos/2.jpg": "70be0eb418803fff7611479d0a179bb4",
"assets/assets/games/logos/50.jpg": "3939ff463e69a2f756336e814282e504",
"assets/assets/games/logos/44.jpg": "de7eead9b545af76a4edb03eed50b4e5",
"assets/assets/games/logos/151.jpg": "667e539ea76d910335e67fe3febcbb44",
"assets/assets/games/logos/145.jpg": "b04523968fd7691505bc54a0d515fa00",
"assets/assets/games/logos/93.jpg": "ef256f9cf8e68a5f0d45b3ed71f2df7b",
"assets/assets/games/logos/87.jpg": "2ec152653bc2767506c0d432da21902b",
"assets/assets/games/logos/179.jpg": "ea31f3556fb21d7e3165657d0eb63726",
"assets/assets/games/logos/227.jpg": "a0e9697c492adf7f529363826be13c98",
"assets/assets/games/logos/233.jpg": "e029b5669039e988c337ad51f724443f",
"assets/assets/games/logos/232.jpg": "116ff61857b6515e86199abac1201507",
"assets/assets/games/logos/226.jpg": "3b9cf6c4e14cbfdf6a797d231b1b6c64",
"assets/assets/games/logos/86.jpg": "7a408bc28342fe26dbceed062ebae051",
"assets/assets/games/logos/178.jpg": "88c1cc5427361d8bcbb5c4a5a48519c8",
"assets/assets/games/logos/92.jpg": "98e5a2835562da540997ec8fa3e85511",
"assets/assets/games/logos/144.jpg": "feb77a87fc396544b88dfbe857c4ea2a",
"assets/assets/games/logos/150.jpg": "865ebf5929a0ae6385497ac94d7390c5",
"assets/assets/games/logos/45.jpg": "48d45d547f666ca12f701b334dc42057",
"assets/assets/games/logos/3.jpg": "4c84587c09608ecf49c02cd4dd1f8d6f",
"assets/assets/games/logos/51.jpg": "23e55a5d1df7f3ab7ac026da3033feba",
"assets/assets/games/logos/79.jpg": "dc17838a5284d38be88ceb505361e19c",
"assets/assets/games/logos/187.jpg": "d1c0d5c9a2978e5a616f86764e57da89",
"assets/assets/games/logos/193.jpg": "a2514ccb6c6500dbd365aeb68b4c08dd",
"assets/assets/games/logos/185.jpg": "1334a44dc154ae8a1069576ade1f90a9",
"assets/assets/games/logos/191.jpg": "7086c138cdae1e2b17a85978dffbe09f",
"assets/assets/games/logos/47.jpg": "4f2087294ba1d01c90af7f752da22fc0",
"assets/assets/games/logos/53.jpg": "e5207fd6458e54c8bb27b9c3e8c57309",
"assets/assets/games/logos/1.jpg": "09c021f5e3565570948effb6052c2b02",
"assets/assets/games/logos/146.jpg": "cb716bdec26f86710b94ff1746d2a5b5",
"assets/assets/games/logos/152.jpg": "0f2a0268cd568e8e1e38bd3b0994e349",
"assets/assets/games/logos/84.jpg": "c5f9171acd068840d78172a706895480",
"assets/assets/games/logos/90.jpg": "0a4dc68ef28631400a6dfc88799eb3b7",
"assets/assets/games/logos/230.jpg": "2e1bc0dcb120ff338af6be8631b140b0",
"assets/assets/games/logos/224.jpg": "40d138d2f01d63288c205fd5569ec7ba",
"assets/assets/games/logos/218.jpg": "9c2b6a461849a6ec50dde8a05a8afb05",
"assets/assets/games/logos/219.jpg": "9fa8694c359f40504c79f908f47809ee",
"assets/assets/games/logos/225.jpg": "c033576eb394eedc4ae3dc664d5d700a",
"assets/assets/games/logos/231.jpg": "5facdb2d36555df99ba81b036d2076c4",
"assets/assets/games/logos/91.jpg": "c4702e4e0453ba61562a6b9887c9b6ae",
"assets/assets/games/logos/85.jpg": "fcae20a337f0fe44ffa4e430a5d5472e",
"assets/assets/games/logos/153.jpg": "d49b44105272ec19736df71cb2ede8dd",
"assets/assets/games/logos/147.jpg": "1d58aa01e7eb6b5e08a9c4a5e7bfcb2e",
"assets/assets/games/logos/52.jpg": "0e38269612a31d44d52383a611308ff1",
"assets/assets/games/logos/46.jpg": "e35a9450e00d1da920df461c0d0c55d3",
"assets/assets/games/logos/190.jpg": "b2790d6ea5017d84bccf7d08916b985d",
"assets/assets/games/logos/184.jpg": "309a270349e26edb1e5afa00a0fc5bb5",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
