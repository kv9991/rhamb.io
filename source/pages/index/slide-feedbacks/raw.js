// @flow

import React from 'react';
import classnames from 'classnames';
import { SomethingWrong } from '~/components/composite/something-wrong';
import { List } from '~/domains/abstractions/list/constructor';
import { Feedback } from '~/components/entities/feedback';

import {
  HorizontalMenu,
  Button,
  Grid,
  Container,
  Spinner,
  Heading,
  Icon,
  Paragraph,
} from 'ui.rhamb.io';

import type { JSSObject } from '~/domains/app/jss/types';

type Props = {
  classes: JSSObject,
  list: List,
  error: ?Error,
  isHydrating: boolean,
};

export const SlideFeedbacksRaw = (props: Props) => {
  const { classes, list, error, isHydrating } = props;

  const reloadHandler = () => {
    list.fetch({
      delay: 1000,
    });
  };

  if (error) {
    return (
      <div className={classnames(classes.root, classes.root_error)}>
        <SomethingWrong>
          <Button
            onClick={reloadHandler}
            icon={<Icon icon="RefreshCcw" size={15} />}
          >
            Reload feedbacks
          </Button>
        </SomethingWrong>
      </div>
    );
  }

  if (isHydrating) {
    return (
      <div className={classnames(classes.root, classes.root_loader)}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Container text className={classes.head}>
        <Heading size="h3" as="h3">
          Our customers
        </Heading>
        <Paragraph light primary>
          We love our community and community loves us
        </Paragraph>
      </Container>
      <Grid.Row className={classes.list}>
        {list.entities.slice(0, 3).map((feedbackId) => (
          <Grid.Column
            options={{
              mobile: {
                width: 12,
              },
              tablet: {
                width: 6,
              },
              desktop: {
                width: 4,
              },
            }}
            key={feedbackId}
          >
            <Feedback feedbackId={feedbackId} />
          </Grid.Column>
        ))}
      </Grid.Row>
      <HorizontalMenu className={classes.bottom}>
        <Button
          className={classes.button}
          icon={<Icon icon="Smile" size={16} />}
        >
          View all opinions
        </Button>
        <Button
          className={classes.button}
          icon={<Icon icon="Edit2" size={16} />}
        >
          Write own
        </Button>
      </HorizontalMenu>
    </div>
  );
};
