import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { useContext } from "react"
import { ListGroup } from "react-bootstrap"

const CategoryBar = observer(() => {
  const { manager } = useContext(Context)
  return (
    <ListGroup>
      {manager.categories.map((category) => (
        <ListGroup.Item
            key={category.id}
            style={{cursor: "pointer"}}
            active={category.id === manager.selectedCategory.id}
            onClick={() => manager.setSelectedCategory(category)}>
              {category.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
})

export default CategoryBar
