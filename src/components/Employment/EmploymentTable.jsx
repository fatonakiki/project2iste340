import { Icon, Menu, Table } from 'semantic-ui-react'
import { useState } from 'react'

function EmploymentTable({ employmentTable }) {
    const itemsPerPage = 90; // Set the number of items to display per page
    const [currentPage, setCurrentPage] = useState(1); //set state for current page

    //calculate total pages by divident table length with how many items per page we want
    const totalPages = Math.ceil(employmentTable.length / itemsPerPage);

    //handler for changing page
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    //slice the employmentTable object according to on which page we are and how many items we want per page
    const visibleItems = employmentTable.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    return (
        <>
            {/* don't let table height be more 400px and make it scrollable */}
            <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
                <Table celled>
                    {/* make header sticky appear on top */}
                    <Table.Header style={{position: 'sticky', top: 0, zIndex: 1}}>
                        <Table.Row>
                            <Table.HeaderCell>Employer</Table.HeaderCell>
                            <Table.HeaderCell>Degree</Table.HeaderCell>
                            <Table.HeaderCell>City</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>StartDate</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>


                    <Table.Body style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {visibleItems.map((employer, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{employer.employer}</Table.Cell>
                                <Table.Cell>{employer.degree}</Table.Cell>
                                <Table.Cell>{employer.city}</Table.Cell>
                                <Table.Cell>{employer.title}</Table.Cell>
                                <Table.Cell>{employer.startDate}</Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                    {/* make footer sticky and appear on bottom */}
                    <Table.Footer style={{position: 'sticky', bottom: 0, zIndex: 1}}>
                        <Table.Row>
                            <Table.HeaderCell colSpan='5'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    {[...Array(totalPages).keys()].map((page) => (
                                        <Menu.Item as='a' key={page + 1} active={page + 1 === currentPage} onClick={() => handlePageChange(page + 1)}>
                                            {page + 1}
                                        </Menu.Item>
                                    ))}
                                    <Menu.Item as='a' icon onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        </>
    )
}
export default EmploymentTable;