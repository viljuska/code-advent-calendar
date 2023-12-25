const fs        = require( 'fs' );
const path      = require( 'path' );
const file_path = path.resolve( __dirname, './input.txt' );

function part_one() {
	fs.readFile( file_path, 'utf8', ( err, data ) => {
		if ( err ) {
			console.error( err );

			return;
		}

		const lines = data.split( '\r\n' );
		const sum   = lines.map( line => {
			return line.replace( /[a-zA-Z]/g, '' );
		} )
			.map( line => {
				return +`${ line[ 0 ] }${ line.at( -1 ) }`;
			} )
			.reduce( ( acc, cur ) => {
				return acc + cur;
			}, 0 );

		console.log( sum );
	} );
}

function part_two() {
	fs.readFile( file_path, 'utf8', ( err, data ) => {
		if ( err ) {
			console.error( err );

			return;
		}

		const lines = data.split( '\r\n' );
		// const mapp_numbers = {
		// 	zero : 0,
		// 	one  : 1,
		// 	two  : 2,
		// 	three: 3,
		// 	four : 4,
		// 	five : 5,
		// 	six  : 6,
		// 	seven: 7,
		// 	eight: 8,
		// 	nine : 9,
		// };
		const mapp_numbers = [
			[ 'z', 'e', 'r', 'o' ],
			[ 'o', 'n', 'e' ],
			[ 't', 'w', 'o' ],
			[ 't', 'h', 'r', 'e', 'e' ],
			[ 'f', 'o', 'u', 'r' ],
			[ 'f', 'i', 'v', 'e' ],
			[ 's', 'i', 'x' ],
			[ 's', 'e', 'v', 'e', 'n' ],
			[ 'e', 'i', 'g', 'h', 't' ],
			[ 'n', 'i', 'n', 'e' ],
		];
		let mapped_lines   = [];
		let j              = 0;

		for ( const line of lines ) {
			let mapped_line = line.split( '' );

			for ( let i = 0; i < mapped_line.length; i++ ) {
				const char  = mapped_line[ i ];
				let numbers = [];
				for ( const num of mapp_numbers ) {
					if ( num[ i ] === char ) {
						numbers.push( num );
					}

					if ( num.length === i ) {
						break;
					}
				}
				console.log(numbers);
			}

			// for ( const num  of mapp_numbers ) {
			// 	const mapped_nums = num.filter()

			// mapped_line = mapped_line.replaceAll( key, mapp_numbers[ key ] );
			// }
			// mapped_lines.push( mapped_line );

			if ( j === 5 ) {
				break;
			}

			j++;
		}

		// if ( !mapped_lines.length ) {
		// 	console.log( 'No mapped lines found' );
		//
		// 	return;
		// }

		// const sum = mapped_lines.map( line => {
		// 	return line.replace( /[a-zA-Z]/g, '' );
		// } )
		// 	.map( line => {
		// 		return +`${ line[ 0 ] }${ line.at( -1 ) }`;
		// 	} )
		// 	.reduce( ( acc, cur ) => {
		// 		return acc + cur;
		// 	}, 0 );
		//
		// console.log( sum );
	} );
}

module.exports = () => {
	// part_one();
	part_two();
};
