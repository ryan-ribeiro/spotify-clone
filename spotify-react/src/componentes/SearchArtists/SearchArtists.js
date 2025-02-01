import React, { useState, useEffect } from 'react';

const SearchArtists = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [artists, setArtists] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Função para fazer a requisição à API
    const requestApi = (searchTerm) => {
        const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                // Filtra os artistas com base no nome
                const filteredArtists = result.filter(artist => artist.name.toLowerCase().startsWith(searchTerm));
                setArtists(filteredArtists);
                setShowResults(filteredArtists.length > 0);
            });
    };

    // Hook para executar a requisição sempre que o searchTerm mudar
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setShowResults(false);
            setArtists([]);
        } else {
            requestApi(searchTerm.toLowerCase().trim());
        }
    }, [searchTerm]);

    return (
        <div>
            {/* Input de pesquisa */}
            <input
                id="search-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquisar artista"
            />

            {/* Resultados de artistas */}
            {showResults && (
                <div id="result-artist" className="grid-container">
                    {artists.map((artist) => (
                        <div className="artist-card" key={artist.id}>
                            <div className="card-img">
                                <img className="artist-img" src={artist.urlImg} alt={artist.name} />
                                <div className="play">
                                    <span className="fa fa-solid fa-play"></span>
                                </div>
                            </div>
                            <div className="card-text">
                                <span className="artist-name">{artist.name}</span>
                                <span className="artist-categorie">Artista</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Caso não haja resultados */}
            {!showResults && searchTerm && (
                <div id="result-playlists" className="hidden">
                    Nenhum artista encontrado.
                </div>
            )}
        </div>
    );
};

export default SearchArtists;
