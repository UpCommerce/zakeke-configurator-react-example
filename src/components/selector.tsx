import { useEffect, useMemo, useState, useCallback } from 'react'
import { useZakeke } from 'zakeke-configurator-react'
import { List, ListItem, ListItemImage } from './list'

function Selector() {
  const {
    isSceneLoading,
    isAddToCartLoading,
    price,
    groups,
    selectOption,
    addToCart,
    templates,
    setTemplate,
    setCamera,
  } = useZakeke()

  // Keep saved the ID and not the references, they will change on each update
  const [selectedGroupId, selectGroup] = useState<number | null>(null)
  const [selectedStepId, selectStep] = useState<number | null>(null)
  const [selectedAttributeId, selectAttribute] = useState<number | null>(null)

  const selectedGroup = groups.find(group => group.id === selectedGroupId)
  const selectedStep = selectedGroup
    ? selectedGroup.steps.find(step => step.id === selectedStepId)
    : null

  // Attributes can be in both groups and steps
  const attributes = useMemo(
    () => (selectedStep || selectedGroup)?.attributes ?? [],
    [selectedGroup, selectedStep]
  )
  const selectedAttribute = attributes.find(
    attribute => attribute.id === selectedAttributeId
  )

  // Open the first group and step when loaded
  useEffect(() => {
    if (!selectedGroup && groups.length > 0) {
      selectGroup(groups[0].id)

      if (groups[0].steps.length > 0) {
        selectStep(groups[0].steps[0].id)
      }

      if (templates.length > 0) {
        setTemplate(templates[0].id)
      }
    }
  }, [selectedGroup, groups, templates, setTemplate])

  // Select first attribute automatically
  useEffect(() => {
    if (!selectedAttribute && attributes.length > 0) {
      selectAttribute(attributes[0].id)
    }
  }, [selectedAttribute, attributes])

  // Update camera when group changes
  useEffect(() => {
    if (selectedGroup?.cameraLocationId) {
      setCamera(selectedGroup.cameraLocationId)
    }
  }, [selectedGroup, setCamera])

  // Memoized event handlers
  const handleGroupClick = useCallback((groupId: number) => {
    selectGroup(groupId)
  }, [])

  const handleStepClick = useCallback((stepId: number) => {
    selectStep(stepId)
  }, [])

  const handleAttributeClick = useCallback((attributeId: number) => {
    selectAttribute(attributeId)
  }, [])

  const handleOptionClick = useCallback((optionId: number) => {
    selectOption(optionId)
  }, [selectOption])

  if (isSceneLoading || !groups || groups.length === 0) {
    return <span>Loading scene...</span>
  }

  return (
    <div className="h-full overflow-auto">
      <List>
        {groups.map(group => (
          <ListItem
            key={group.id}
            onClick={() => handleGroupClick(group.id)}
            selected={selectedGroup === group}
          >
            Group: {group.id === -1 ? 'Other' : group.name}
          </ListItem>
        ))}
      </List>

      {selectedGroup && selectedGroup.steps.length > 0 && (
        <List>
          {selectedGroup.steps.map(step => (
            <ListItem
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              selected={selectedStep === step}
            >
              Step: {step.name}
            </ListItem>
          ))}
        </List>
      )}

      <List>
        {attributes.map(attribute => (
          <ListItem
            key={attribute.id}
            onClick={() => handleAttributeClick(attribute.id)}
            selected={selectedAttribute === attribute}
          >
            Attribute: {attribute.name}
          </ListItem>
        ))}
      </List>

      <List>
        {selectedAttribute && selectedAttribute.options.map(option => (
          <ListItem
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            selected={option.selected}
          >
            {option.imageUrl && <ListItemImage src={option.imageUrl} />}
            Option: {option.name}
          </ListItem>
        ))}
      </List>

      <h3 className="text-lg font-semibold">Price: {price}</h3>
      {isAddToCartLoading ? (
        <span>Adding to cart...</span>
      ) : (
        <button
          onClick={addToCart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to cart
        </button>
      )}
    </div>
  )
}

export default Selector