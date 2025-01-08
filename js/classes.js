//1.
//añado la clase user necesaria para guardar los datos de los usuarios 
class User {
  constructor(name, surname, address, town, postalCode, email, username, password) {
      this.name = name;
      this.surname = surname;
      this.address = address;
      this.town = town;
      this.postalCode = postalCode;
      this.email = email;
      this.username = username;
      this.password = password;
      this.favorites = [];   // aqui guardaremos los favoritos del usuario para tenerlos aunque finalice la sesion y vuelva a entrar
  }

  //Metodo para añadir comics a los favoritos 
  addFavorite(comicId) {
      if (!this.favorites.includes(comicId)) {
          this.favorites.push(comicId);
      }
  }

}

// Creamos la clase comic que contiene el metodo getThumbnailURL
class  Comic { 
    constructor (id, title, issueNumber, description, pageCount, thumbnail, price, creators, characters) {
      this.id = id; //identificador del comic 
      this.title = title; //titulo del comic 
      this.issueNumber = issueNumber;  //numero de edicion del comic 
      this.description = description;  //descripcion del comic 
      this.pageCount = pageCount; // numero de paginas 
      this.thumbnail = thumbnail;  //imagen del comic (objeto de la clase Thumbnail )
      this.price = price; //Precio del comic 
      this.creators = creators;  // info creadores 
      this.characters = characters;  //lista de personajes 
    }
  
    //**********GETTERS DE LA CLASE COMIC**********
  
    //para conseguir la imagen del comic utilizaremos un metodo de instancia
  
    getThumbnailURL() { 
    return `${this.thumbnail.path}${this.thumbnail.extension}`;
    }
  
    getId() {
      return this.id;
    }
  
    getTitle() {
      return this.title;
    }
  
    getIssueNumber() {
      return this.issueNumber;
    }
  
    getDescription() {
      return this.description;
    }
  
    getPageCount() {
      return this.pageCount;
    }
  
    getThumbnail() {
      return this.thumbnail;
    }
  
    getPrice() {
      return this.price;
    }
  
    getCreators() {
      return this.creators;
    }
  
    getCharacters() {
      return this.characters;
    }
  
  
  
  //**********SETTERS DE LA CLASE COMIC**********
  
  setId(newid) { 
    this.id = newid; 
  }
  
  setTitle(newTitle) {
    this.title = newTitle;
  }
  
  setIssueNumber(newIssueNumber) {
    this.issueNumber = newIssueNumber;
  }
  
  setDescription(newDescription) {
    this.description = newDescription;
  }
  
  setPageCount(newPageCount) {
    this.pageCount = newPageCount;
  }
  
  setThumbnail(newThumbnail) {
    this.thumbnail = newThumbnail;
  }
  
  setPrice(newPrice) {
    this.price = newPrice;
  }
  
  setCreators(newCreators) {
    this.creators = newCreators;
  }
  
  setCharacters(newCharacters) {
    this.characters = newCharacters;
  }
  }
  
  
  //------------------------------------------------------------------------------------------------------
  
  //2. 
  
  // Clase Hero donde guardamos la informacion de un heroe
  class Hero { 
    constructor(id, name, description, modified, thumbnail, resourceURl,comics){ 
        this.id = id; 
        this.name = name; 
        this.description = description; 
        this.modified = modified; 
        this.thumbnail = thumbnail; 
        this.resourceURl = resourceURl; 
        this.comics = comics;   //este es un array para la lista de comics del heroe 
    }
  
  
  //**********GETTERS DE LA CLASE HERO**********
    
  //Metodo de instancia getThumbnailURL para obtener la imagen del heroe
  getThumbnailURL() {
  return `${this.thumbnail.path}/${this.thumbnail.extension}`;
  }
  
  getId() {
    return this.id;
  }
  
  getName() {
    return this.name;
  }
  
  getDescription() {
    return this.description;
  }
  
  getModified() {
    return this.modified;
  }
  
  getThumbnail() {
    return this.thumbnail;
  }
  
  getResourceURL() {
    return this.resourceURl;
  }
  
  getComics() {
    return this.comics;
  }
  
  
   //**********SETTERS DE LA CLASE HERO**********
  
   setId(id) { 
    this.id = id; 
  }
  
  setName(name) {
    this.name = name;
  }
  
  setDescription(description) {
    this.description = description;
  }
  
  setModified(modified) {
    this.modified = modified;
  }
  
  setThumbnail(thumbnail) {
    this.thumbnail = thumbnail;
  }
  
  setResourceURL(resourceURl) {
    this.resourceURl = resourceURl;
  }
  
  setComics(comics) {
    this.comics = comics;
  }
  
  }
  //------------------------------------------------------------------------------------------------------
  
  //la classe Thumbnail la utilizamos para conseguir la ruta y la extension de la imagen de los comics y heroes
  class Thumbnail { 
    constructor(path, extension){ 
      this.path = path; 
      this.extension = extension; 
    }
  
    //**********GETTERS DE LA CLASE THUMBNAIL**********
  
    getPath() { 
      return this.path; 
    }
  
    getExtension() { 
      return this.extension; 
    }
  
    //**********SETTERS DE LA CLASE THUMBNAIL**********
  
    setPath(path) { 
      this.path = path; 
    }
  
    setExtension(extension) { 
      this.extension = extension; 
    }
  
  }
  
  //------------------------------------------------------------------------------------------------------
  
  //3. 
  
  //Clase Favorites: array para guardar los comics que mas nos gusten 
  
  class Favorites{
    constructor( ){
      this.favorites = []; 
    }
  
  //**********A CONTINUACION LOS METODOS DE LA CLASE Favorites**********
  
  //metodo addFavorite(comic)  para añadir un comic a la lista
  addFavorite(comic) {     
    return this.favorites.push(comic);  
    
  }
  
  //metodo removeFavorite para eliminar un comic de favoritos utilizando sU ID  
  removeFavorite(comicId) { 
    this.favorites = this.favorites.filter(comic => comic.id !== comicId) ;
  }
  
  //creamos showFavorites que nos devolvera el objeto Array creado en el constructor
  showFavorites() {
    return this.favorites.forEach(comic =>
        console.log(` ${comic.id}, ${comic.title}`));
  }
  
  
  // Metodo addMultipleFavorites(...comics). Ayuda en guardar mas comics al mismo tiempo al objeto 
  addMultipleFavorites(...comics) {
    this.favorites.push(...comics);
  }
  
  //Metodo copyFavorites() crea una array copia del array favorites
  copyFavorites() {
    return [...this.favorites]; 
  }
  
  }


