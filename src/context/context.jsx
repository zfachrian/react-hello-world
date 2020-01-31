import React, { Component, createContext } from 'react';

/**
 * Context API
 * State Management, berguna untuk melakukan routing pengiriman perubahan value untuk global
 * Fungsionalitas sama dengan Redux, namun Context API hadir dengan skema yang sederhana
 */
export const RootContext = createContext();

/**
 * Provider
 */
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
	return (
		class ParentComp extends Component {

			/**
			* Inisialisasi kebutuhan State Global
			*/
			state = {
				totalOrder: 0
			}

			/**
			 * Dispatch
			 * Berfungsi untuk menjalakan task yang dibuat
			 */
			dispatch = (action) => {
				if (action.type === 'PLUS_ORDER') {
					return this.setState({
						totalOrder: this.state.totalOrder + 1
					})
				}
				if (action.type === 'MINUS_ORDER') {
					return this.setState({
						totalOrder: this.state.totalOrder - 1
					})
				}
			}

			render(){
				return (
					<Provider value={
						{
							state: this.state,
							dispatch: this.dispatch
						}
					}>
						<Children {...this.props} />
					</Provider>
				)
			}
		}
	)
}
export default GlobalProvider;

/**
 * Consumer
 */
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
	return (
		class ParentConsumer extends Component{
			render(){
				return (
					<Consumer>
						{
							value => {
								return (
									<Children {...this.props} {...value} />
								)
							}
						}
					</Consumer>
				)
			}
		}
	)
}