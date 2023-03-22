export interface Modification {
	engine: string
	price_min: number
	price_max?: number
	capacity: number
	power: number
	WD: number
}

export interface Car {
	mark: string
	model: string
	year_start: number
	year_end?: number
	img_name: string
	modifications?: Modification[]
}

enum CarsActionTypes {
	FETCH_CARS = 'FETCH_CARS',
	FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS',
	FETCH_CARS_ERROR = 'FETCH_CARS_ERROR'
}

export interface CarsState {
	cars: Car[]
	loading: boolean
	error: null | string
}

export interface FetchCarsAction {
	type: CarsActionTypes.FETCH_CARS
}

export interface FetchCarsSuccessAction {
	type: CarsActionTypes.FETCH_CARS_SUCCESS
	cars: Car[]
}

export interface FetchCarsErrorAction {
	type: CarsActionTypes.FETCH_CARS_ERROR
	error: string
}