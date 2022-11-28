import React from 'react';

import useResource from './useResource';

const ResourceList = ({resource}) => {
    const resources = useResource(resource);
        return (
            <ul>
                {resources.map(record=> <li key={record.id}>{record.title}</li> )}
            </ul>
        );
}
export default ResourceList;

// const ResourceList = ({resource}) => {
//     const [resouss, setResouss] = useState([]);
//     const  fetchResource = async (resource) => {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
//         setResouss(res.data);
//     }
//     useEffect(()=> {
//         fetchResource(resource);
//     }, [resource]);
//         return (
//             <ul>
//                 {resouss.map(record=> <li key={record.id}>{record.title}</li> )}
//             </ul>
//         );
// }
// export default ResourceList;


// class ResourceList extends Component {
//     state = {resou: "posts", resources: []}
//   async  componentDidMount() {
//        const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//        this.setState({resources: res.data});
//     }
    
//     async componentDidUpdate(prevProps) {
//         if(prevProps.resource !== this.props.resource){
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//        this.setState({resources: res.data});
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.resources.length}
//             </div>
//         );
//     }
// }

// export default ResourceList;
