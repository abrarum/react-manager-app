import _ from 'lodash';
import React, {Component} from 'react';
import { FlatList, Platform, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentWillMount(){
        this.props.employeeFetch();

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        // Will recieve the new set of props in nextProps. this.props would still have the old props.

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        this.dataSource = employees;
        //We're using createDataSource both in ComponenWillMount & ComponentWillRecieveProps b/c we're
        //recreating the data source for the updated content to be seen.
    }

    keyExtract = (employee, index) => employee.uid;

    renderRow = (employee) => {
        return <ListItem employee={employee} />;
    }

    render() {
        //console.log(this.props.employees);
        return(
                <FlatList 
                    data={this.dataSource}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtract}
                />
        );
    }
    
}

const mapStateToProps = state => {
    //Now we're converting the object into array (using lodash library)
    //_.map pattern:
    //_.map(objects/collection, iteration(like plus or do any other operation))
    
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
    //the (val,uid) represents that for each val(each set) there is a uid assigned!
};
export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
