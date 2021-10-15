import {
  orderListingInitialState,
  orderListing as orderListingReducer
} from '.';
import {
  fakeChangeSortingOrderListing,
  fakeFailFetchOrderListingAction,
  fakePendFetchOrderListingAction,
  fakeSetOrderItemsPerPage,
  fakeSetOrderListingCurrentPage,
  fakeSuccessFetchOrderListingAction,
  fakeUpdateSearchQueryOrderListing,
  invalidAction
} from '../../../../fakeData';

describe('Order listing Reducer', () => {
  describe('Fetch Order listing', () => {
    it('should return initial state if we pass state as undefined to reducer', () => {
      const orderListingState = orderListingReducer(undefined, invalidAction);
      expect(orderListingState).toEqual(orderListingInitialState);
    });

    it('should update loading prop to (true) when action pending dispatched', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakePendFetchOrderListingAction
      );
      expect(orderListingState).toEqual({
        ...orderListingInitialState,
        loading: true
      });
    });

    it('should update (orders and total) in reducer when action success dispatched and change loading to (false)', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakePendFetchOrderListingAction
      );
      const updatedOrderListingState = orderListingReducer(
        orderListingState,
        fakeSuccessFetchOrderListingAction
      );
      expect(updatedOrderListingState).toEqual({
        ...orderListingState,
        loading: false,
        orders: fakeSuccessFetchOrderListingAction.payload.response.data,
        total:
          fakeSuccessFetchOrderListingAction.payload.response.pagination.total
      });
    });

    it('should update loading prop to (false) when action fail dispatched.', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakePendFetchOrderListingAction
      );
      const updatedOrderListingState = orderListingReducer(
        orderListingState,
        fakeFailFetchOrderListingAction
      );
      expect(updatedOrderListingState).toEqual({
        ...orderListingState,
        loading: false
      });
    });
  });

  describe('order listing query', () => {
    it('should set order listing current page.', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakeSetOrderListingCurrentPage
      );
      expect(orderListingState).toEqual({
        ...orderListingInitialState,
        query: {
          ...orderListingInitialState.query,
          currentPage: fakeSetOrderListingCurrentPage.payload.currentPage
        }
      });
    });

    it('should set order items per page.', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakeSetOrderItemsPerPage
      );
      expect(orderListingState).toEqual({
        ...orderListingInitialState,
        query: {
          ...orderListingInitialState.query,
          perPage: fakeSetOrderItemsPerPage.payload.perPage
        }
      });
    });

    it('should update search query order listing.', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakeUpdateSearchQueryOrderListing
      );
      expect(orderListingState).toEqual({
        ...orderListingInitialState,
        orders: [],
        total: -1,
        query: {
          ...orderListingInitialState.query,
          searchTerm: fakeUpdateSearchQueryOrderListing.payload.searchTerm,
          currentPage: 1,
          perPage: 10
        }
      });
    });

    it('should change sorting order listing.', () => {
      const orderListingState = orderListingReducer(
        undefined,
        fakeChangeSortingOrderListing
      );
      expect(orderListingState).toEqual({
        ...orderListingInitialState,
        query: {
          ...orderListingInitialState.query,
          sorting: {
            activeCol: fakeChangeSortingOrderListing.payload.activeCol,
            direction: fakeChangeSortingOrderListing.payload.direction
          }
        }
      });
    });
  });
});
