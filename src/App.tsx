import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router'
import Layout from './Layout'

const ActionSheet = lazy(() => import('./pages/ActionSheet'))
const AutoCenter = lazy(() => import('./pages/AutoCenter'))
const Avatar = lazy(() => import('./pages/Avatar'))
const Badge = lazy(() => import('./pages/Badge'))
const Button = lazy(() => import('./pages/Button'))
const Calendar = lazy(() => import('./pages/Calendar'))
const CapsuleTabs = lazy(() => import('./pages/CapsuleTabs'))
const Card = lazy(() => import('./pages/Card'))
const CascadePicker = lazy(() => import('./pages/CascadePicker'))
const CascadePickerView = lazy(() => import('./pages/CascadePickerView'))
const Cascader = lazy(() => import('./pages/Cascader'))
const CascaderView = lazy(() => import('./pages/CascaderView'))
const CheckList = lazy(() => import('./pages/CheckList'))
const Checkbox = lazy(() => import('./pages/Checkbox'))
const Collapse = lazy(() => import('./pages/Collapse'))
const ConfigProvider = lazy(() => import('./pages/ConfigProvider'))
const DatePicker = lazy(() => import('./pages/DatePicker'))
const DatePickerView = lazy(() => import('./pages/DatePickerView'))
const Dialog = lazy(() => import('./pages/Dialog'))
const Divider = lazy(() => import('./pages/Divider'))
const DotLoading = lazy(() => import('./pages/DotLoading'))
const Dropdown = lazy(() => import('./pages/Dropdown'))
const Ellipsis = lazy(() => import('./pages/Ellipsis'))
const Empty = lazy(() => import('./pages/Empty'))
const ErrorBlock = lazy(() => import('./pages/ErrorBlock'))
const FloatingBubble = lazy(() => import('./pages/FloatingBubble'))
const FloatingPanel = lazy(() => import('./pages/FloatingPanel'))
const Form = lazy(() => import('./pages/Form'))
const Grid = lazy(() => import('./pages/Grid'))
const Image = lazy(() => import('./pages/Image'))
const ImageUploader = lazy(() => import('./pages/ImageUploader'))
const ImageViewer = lazy(() => import('./pages/ImageViewer'))
const IndexBar = lazy(() => import('./pages/IndexBar'))
const InfiniteScroll = lazy(() => import('./pages/InfiniteScroll'))
const Input = lazy(() => import('./pages/Input'))
const JumboTabs = lazy(() => import('./pages/JumboTabs'))
const List = lazy(() => import('./pages/List'))
const Loading = lazy(() => import('./pages/Loading'))
// const Mask = lazy(() => import('./pages/Mask'))
// const Modal = lazy(() => import('./pages/Modal'))
// const NavBar = lazy(() => import('./pages/NavBar'))
// const NoticeBar = lazy(() => import('./pages/NoticeBar'))
// const NumberKeyboard = lazy(() => import('./pages/NumberKeyboard'))
// const PageIndicator = lazy(() => import('./pages/PageIndicator'))
// const PasscodeInput = lazy(() => import('./pages/PasscodeInput'))
// const Picker = lazy(() => import('./pages/Picker'))
// const PickerView = lazy(() => import('./pages/PickerView'))
// const Popover = lazy(() => import('./pages/Popover'))
// const Popup = lazy(() => import('./pages/Popup'))
// const ProgressBar = lazy(() => import('./pages/ProgressBar'))
// const ProgressCircle = lazy(() => import('./pages/ProgressCircle'))
// const PullToRefresh = lazy(() => import('./pages/PullToRefresh'))
// const Radio = lazy(() => import('./pages/Radio'))
// const Rate = lazy(() => import('./pages/Rate'))
// const Result = lazy(() => import('./pages/Result'))
// const SafeArea = lazy(() => import('./pages/SafeArea'))
// const ScrollMask = lazy(() => import('./pages/ScrollMask'))
// const SearchBar = lazy(() => import('./pages/SearchBar'))
// const Selector = lazy(() => import('./pages/Selector'))
// const SideBar = lazy(() => import('./pages/SideBar'))
// const Skeleton = lazy(() => import('./pages/Skeleton'))
// const Slider = lazy(() => import('./pages/Slider'))
// const Space = lazy(() => import('./pages/Space'))
// const SpinLoading = lazy(() => import('./pages/SpinLoading'))
// const Stepper = lazy(() => import('./pages/Stepper'))
// const Steps = lazy(() => import('./pages/Steps'))
// const SwipeAction = lazy(() => import('./pages/SwipeAction'))
// const Swiper = lazy(() => import('./pages/Swiper'))
// const Switch = lazy(() => import('./pages/Switch'))
// const TabBar = lazy(() => import('./pages/TabBar'))
// const Tabs = lazy(() => import('./pages/Tabs'))
// const Tag = lazy(() => import('./pages/Tag'))
// const TextArea = lazy(() => import('./pages/TextArea'))
// const Toast = lazy(() => import('./pages/Toast'))
// const TreeSelect = lazy(() => import('./pages/TreeSelect'))
// const VirtualInput = lazy(() => import('./pages/VirtualInput'))
// const WaterMark = lazy(() => import('./pages/WaterMark'))

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/ActionSheet',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <ActionSheet />
          </Suspense>
        )
      },
      {
        path: '/AutoCenter',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <AutoCenter />
          </Suspense>
        )
      },
      {
        path: '/Avatar',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Avatar />
          </Suspense>
        )
      },
      {
        path: '/Badge',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Badge />
          </Suspense>
        )
      },
      {
        path: '/Button',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Button />
          </Suspense>
        )
      },
      {
        path: '/Calendar',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Calendar />
          </Suspense>
        )
      },
      {
        path: '/CapsuleTabs',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <CapsuleTabs />
          </Suspense>
        )
      },
      {
        path: '/Card',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Card />
          </Suspense>
        )
      },
      {
        path: '/CascadePicker',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <CascadePicker />
          </Suspense>
        )
      },
      {
        path: '/CascadePickerView',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <CascadePickerView />
          </Suspense>
        )
      },
      {
        path: '/Cascader',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Cascader />
          </Suspense>
        )
      },
      {
        path: '/CascaderView',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <CascaderView />
          </Suspense>
        )
      },
      {
        path: '/CheckList',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <CheckList />
          </Suspense>
        )
      },
      {
        path: '/Checkbox',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Checkbox />
          </Suspense>
        )
      },
      {
        path: '/Collapse',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Collapse />
          </Suspense>
        )
      },
      {
        path: '/ConfigProvider',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <ConfigProvider />
          </Suspense>
        )
      },
      {
        path: '/DatePicker',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <DatePicker />
          </Suspense>
        )
      },
      {
        path: '/DatePickerView',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <DatePickerView />
          </Suspense>
        )
      },
      {
        path: '/Dialog',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Dialog />
          </Suspense>
        )
      },
      {
        path: '/Divider',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Divider />
          </Suspense>
        )
      },
      {
        path: '/DotLoading',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <DotLoading />
          </Suspense>
        )
      },
      {
        path: '/Dropdown',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Dropdown />
          </Suspense>
        )
      },
      {
        path: '/Ellipsis',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Ellipsis />
          </Suspense>
        )
      },
      {
        path: '/Empty',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Empty />
          </Suspense>
        )
      },
      {
        path: '/ErrorBlock',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <ErrorBlock />
          </Suspense>
        )
      },
      {
        path: '/FloatingBubble',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <FloatingBubble />
          </Suspense>
        )
      },
      {
        path: '/FloatingPanel',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <FloatingPanel />
          </Suspense>
        )
      },
      {
        path: '/Form',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Form />
          </Suspense>
        )
      },
      {
        path: '/Grid',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Grid />
          </Suspense>
        )
      },
      {
        path: '/Image',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Image />
          </Suspense>
        )
      },
      {
        path: '/ImageUploader',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <ImageUploader />
          </Suspense>
        )
      },
      {
        path: '/ImageViewer',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <ImageViewer />
          </Suspense>
        )
      },
      {
        path: '/IndexBar',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <IndexBar />
          </Suspense>
        )
      },
      {
        path: '/InfiniteScroll',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <InfiniteScroll />
          </Suspense>
        )
      },
      {
        path: '/Input',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Input />
          </Suspense>
        )
      },
      {
        path: '/JumboTabs',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <JumboTabs />
          </Suspense>
        )
      },
      {
        path: '/List',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <List />
          </Suspense>
        )
      },
      {
        path: '/Loading',
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <Loading />
          </Suspense>
        )
      }
      // ,
      // {
      //   path: '/Mask',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Mask />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Modal',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Modal />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/NavBar',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <NavBar />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/NoticeBar',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <NoticeBar />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/NumberKeyboard',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <NumberKeyboard />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/PageIndicator',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <PageIndicator />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/PasscodeInput',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <PasscodeInput />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Picker',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Picker />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/PickerView',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <PickerView />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Popover',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Popover />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Popup',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Popup />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/ProgressBar',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <ProgressBar />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/ProgressCircle',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <ProgressCircle />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/PullToRefresh',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <PullToRefresh />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Radio',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Radio />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Rate',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Rate />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Result',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Result />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/SafeArea',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <SafeArea />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/ScrollMask',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <ScrollMask />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/SearchBar',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <SearchBar />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Selector',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Selector />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/SideBar',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <SideBar />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Skeleton',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Skeleton />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Slider',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Slider />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Space',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Space />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/SpinLoading',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <SpinLoading />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Stepper',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Stepper />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Steps',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Steps />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/SwipeAction',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <SwipeAction />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Swiper',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Swiper />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Switch',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Switch />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/TabBar',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <TabBar />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Tabs',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Tabs />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Tag',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Tag />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/TextArea',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <TextArea />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/Toast',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <Toast />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/TreeSelect',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <TreeSelect />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/VirtualInput',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <VirtualInput />
      //     </Suspense>
      //   )
      // },
      // {
      //   path: '/WaterMark',
      //   element: (
      //     <Suspense fallback={<span>loading...</span>}>
      //       <WaterMark />
      //     </Suspense>
      //   )
      // }
    ]
  }
]

export default () => {
  return useRoutes(routes)
}
