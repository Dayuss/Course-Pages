import React from 'react';
import { Flipped } from 'react-flip-toolkit';

import { ID, ItemRendererProps, useDrag, useDrop, useIsClosestDragging } from 'react-sortly';

const ItemRenderer = React.memo((props) => {
  const { id, depth, data: { type, collapsed, name }, onToggleCollapse } = props;
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop();

  const handleClick = () => {
    if (type === 'file') {
      return;
    }

    onToggleCollapse(id);
  };

  const classes = useStyles({
    ...props,
    depth,
    muted: useIsClosestDragging() || isDragging,
  });

  return (
    <Flipped flipId={id}>
      <div ref={(ref) => drag(drop(ref))} className={classes.root}>
        <Box onClick={handleClick}>
            TESTTT
        </Box>
        <Box display="flex" flex={1} px={1}>
          {name}
        </Box>
      </div>
    </Flipped>
  );
});

export default ItemRenderer;