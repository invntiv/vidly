import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
//import Like from '../components/common/like.jsx';
import Like from "./common/like"
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate'

class Movies extends Component {
    state = {  
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }

    handleDelete = (movie) => {
        console.log("Deleted" + movie.title);
        const movies = this.state.movies.filter( m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = (movie) => {
        console.log('Like Clicked', movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };

    handlePageChange = page  => {
        this.setState({currentPage: page})
    };

    render() { 
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies} = this.state;

        const movies = paginate(allMovies, currentPage, pageSize);

        if (count === 0)
         return <p> There are no movies in the database.</p>;
        
        return ( 
            <React.Fragment>
            <p>Showing {count} movies in the database.</p>
            <Pagination 
                itemsCount={count} 
                pageSize={pageSize} 
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { movies.map(movie => (
                        <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}/></td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    ))}
                
                </tbody>
            </table> 
            </React.Fragment>
        );
    }
}
 
export default Movies;