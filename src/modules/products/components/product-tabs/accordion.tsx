import { Text, clx } from "@medusajs/ui"
import { Accordion, AccordionItem } from "@nextui-org/react"
import AccordionPanel from "@radix-ui/react-accordion"
import React from "react"


interface AccordionComponentProps {
  children: any
  type: undefined | "single" | "multiple"
}

const AccordionComponent = ({
  children,
  ...props
}: AccordionComponentProps) => {
  const { type, ...accordionProps } = props
  return (
    <Accordion {...accordionProps}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Clone each child (AccordionItem) and pass necessary props
          return React.cloneElement(child, {
            key: index.toString(),
            // Pass any necessary props to AccordionItem here
          })
        }
        return child
      })}
    </Accordion>
  )
}

const Item = ({
 
  title: string = '',
  subtitle: string = '',
  description: string = '',
  className?: undefined,
  headingSize = 'large',
  customTrigger = undefined,
  ...props,
}) => {
  return (
    <AccordionItem
      className={clx(
        "border-grey-20 group border-t last:mb-0 last:border-b",
        "py-3",
        className
      )}
      {...props}
    >
      <div className="px-1">
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4">
              <Text className="text-ui-fg-subtle text-sm">{title}</Text>
            </div>
            <AccordionItem>
              {customTrigger || <MorphingTrigger />}
            </AccordionItem>
          </div>
          {subtitle && (
            <Text as="span" size="small" className="mt-1">
              {subtitle}
            </Text>
          )}
        </div>
      </div>
      <AccordionItem>
        <div className="inter-base-regular group-radix-state-closed:animate-accordion-close">
          {description && <Text>{description}</Text>}
          <div className="w-full">{children}</div>
        </div>
      </AccordionItem>
    </AccordionItem>
  )
}

AccordionComponent.Item = Item

const MorphingTrigger = () => {
  return (
    <div className="text-grey-90 hover:bg-grey-5 active:bg-grey-5 active:text-violet-60 focus:border-violet-60 disabled:text-grey-30 bg-transparent disabled:bg-transparent rounded-rounded group relative p-[6px]">
      <div className="h-5 w-5">
        <span className="bg-grey-50 rounded-circle group-radix-state-open:rotate-90 absolute inset-y-[31.75%] left-[48%] right-1/2 w-[1.5px] duration-300" />
        <span className="bg-grey-50 rounded-circle group-radix-state-open:rotate-90 group-radix-state-open:left-1/2 group-radix-state-open:right-1/2 absolute inset-x-[31.75%] top-[48%] bottom-1/2 h-[1.5px] duration-300" />
      </div>
    </div>
  )
}

export default AccordionComponent
